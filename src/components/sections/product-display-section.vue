<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

import { IconPrevious, IconNext } from "@/assets/svgs";
import { ProductImageCarousel } from "@/components/elements";
import { products } from "@/constants";
import type { SneakerImage } from "@/types/shared";
import { cn } from "@/lib/utils";

const imageRef = ref<HTMLElement | null>(null);
const selectedImage = ref<SneakerImage>(products[0].images[0]);
const currentIndex = ref(0);
const autoPlayInterval = ref<ReturnType<typeof setInterval> | null>(null);
const isAnimating = ref(false);

// Auto-play configuration
const AUTOPLAY_DURATION = 4000; // 4 seconds between slides
const ANIMATION_DURATION = 0.7; // Animation duration in seconds

const handleSelect = (image: SneakerImage) => {
  if (isAnimating.value) return;
  const newIndex = products[0].images.findIndex((img) => img.id === image.id);
  if (newIndex !== -1) {
    currentIndex.value = newIndex;
    selectedImage.value = image;
    resetAutoPlay(); // Reset the timer when user manually selects
  }
};

const animateImageTransition = async (direction: "next" | "prev" = "next") => {
  if (!imageRef.value || isAnimating.value) return;

  isAnimating.value = true;

  // Slide out current image
  await gsap.to(imageRef.value, {
    x: direction === "next" ? -100 : 100,
    opacity: 0,
    scale: 0.9,
    duration: ANIMATION_DURATION * 0.4,
    ease: "power2.in",
  });

  // Change image source
  await nextTick();

  // Reset position for slide in
  gsap.set(imageRef.value, {
    x: direction === "next" ? 100 : -100,
    // scale: 0.9,
  });

  // Slide in new image
  await gsap.to(imageRef.value, {
    x: 0,
    opacity: 1,
    scale: 1,
    duration: ANIMATION_DURATION * 0.6,
    ease: "power2.out",
  });

  isAnimating.value = false;
};

const goToNext = async () => {
  const nextIndex = (currentIndex.value + 1) % products[0].images.length;
  currentIndex.value = nextIndex;
  selectedImage.value = products[0].images[nextIndex];
  await animateImageTransition("next");
};

const goToPrev = async () => {
  const prevIndex =
    currentIndex.value === 0
      ? products[0].images.length - 1
      : currentIndex.value - 1;
  currentIndex.value = prevIndex;
  selectedImage.value = products[0].images[prevIndex];
  await animateImageTransition("prev");
};

const startAutoPlay = () => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value);

  autoPlayInterval.value = setInterval(() => {
    if (!isAnimating.value) {
      goToNext();
    }
  }, AUTOPLAY_DURATION);
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
    autoPlayInterval.value = null;
  }
};

const resetAutoPlay = () => {
  stopAutoPlay();
  startAutoPlay();
};

// Watch for manual image changes (when user clicks thumbnails)
watch(selectedImage, async (newVal, oldVal) => {
  if (!imageRef.value || isAnimating.value) return;

  // Only animate if this wasn't triggered by auto-play
  if (oldVal && newVal.id !== oldVal.id) {
    const oldIndex = products[0].images.findIndex(
      (img) => img.id === oldVal.id,
    );
    const newIndex = products[0].images.findIndex(
      (img) => img.id === newVal.id,
    );

    // Determine direction based on index change
    const direction = newIndex > oldIndex ? "next" : "prev";
    await animateImageTransition(direction);
  }
});

onMounted(() => {
  // Start auto-play after component is mounted
  setTimeout(() => {
    startAutoPlay();
  }, AUTOPLAY_DURATION); // Wait one full cycle before starting
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
    class="md:content-grid mx-auto w-full max-w-[calc(32rem+2.5rem)] space-y-4 md:space-y-6 lg:space-y-8"
  >
    <ProductImageCarousel>
      <figure
        :class="
          cn(
            'bg-orange relative grid aspect-square cursor-pointer place-content-center overflow-hidden sm:rounded-2xl',
            '[&>button]:hover:text-orange [&>button]:absolute [&>button]:top-1/2 [&>button]:z-10 [&>button]:grid [&>button]:size-9 [&>button]:-translate-y-1/2 [&>button]:place-content-center [&>button]:rounded-full [&>button]:bg-white [&>button]:sm:hidden [&>button>svg]:size-3',
          )
        "
      >
        <button @click="goToPrev" class="left-3">
          <IconPrevious class="-ml-1" />
        </button>

        <img
          ref="imageRef"
          :src="selectedImage.src"
          class="size-full object-cover"
          style="perspective: 1000px"
        />

        <button @click="goToNext" class="right-3">
          <IconNext class="ml-1" />
        </button>
      </figure>
    </ProductImageCarousel>

    <ul class="grid w-full grid-cols-4 gap-4 max-sm:hidden md:gap-6 lg:gap-8">
      <li
        v-for="image in products[0].images"
        :key="image.id"
        @click="handleSelect(image)"
        :class="
          cn(
            'relative grid aspect-square w-full place-content-center overflow-hidden rounded-2xl bg-white transition-colors duration-200 ease-in-out',
            { 'border-orange border-2': image.src === selectedImage.src },
          )
        "
      >
        <img
          :src="image.thumbnail"
          :class="
            cn(
              'size-full object-cover transition-colors duration-200 ease-in-out',
              {
                'opacity-50': image.src === selectedImage.src,
              },
            )
          "
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
@keyframes progressBar {
  from {
    transform: scaleX(0);
    transform-origin: left;
  }
  to {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
