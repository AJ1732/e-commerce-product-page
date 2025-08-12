<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

import { sneakerImages } from "@/constants";
import { ProductImageCarousel } from "@/components/elements";
import type { SneakerImage } from "@/types/shared";
import { cn } from "@/lib/utils";

const imageRef = ref<HTMLElement | null>(null);
const selectedImage = ref<SneakerImage>(sneakerImages[0]);
const currentIndex = ref(0);
const autoPlayInterval = ref<NodeJS.Timeout | null>(null);
const isAnimating = ref(false);

// Auto-play configuration
const AUTOPLAY_DURATION = 4000; // 4 seconds between slides
const ANIMATION_DURATION = 0.7; // Animation duration in seconds

const handleSelect = (image: SneakerImage) => {
  if (isAnimating.value) return;
  const newIndex = sneakerImages.findIndex((img) => img.id === image.id);
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
  const nextIndex = (currentIndex.value + 1) % sneakerImages.length;
  currentIndex.value = nextIndex;
  selectedImage.value = sneakerImages[nextIndex];
  await animateImageTransition("next");
};

const goToPrev = async () => {
  const prevIndex =
    currentIndex.value === 0
      ? sneakerImages.length - 1
      : currentIndex.value - 1;
  currentIndex.value = prevIndex;
  selectedImage.value = sneakerImages[prevIndex];
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
    const oldIndex = sneakerImages.findIndex((img) => img.id === oldVal.id);
    const newIndex = sneakerImages.findIndex((img) => img.id === newVal.id);

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
    class="mx-auto w-full max-w-lg space-y-4 md:space-y-6 lg:space-y-8"
  >
    <ProductImageCarousel>
      <figure
        class="bg-orange relative grid aspect-square cursor-pointer place-content-center overflow-hidden rounded-2xl"
      >
        <img
          ref="imageRef"
          :src="selectedImage.src"
          class="size-full object-cover"
          style="perspective: 1000px"
        />
      </figure>
    </ProductImageCarousel>

    <ul class="grid w-full grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      <li
        v-for="image in sneakerImages"
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
