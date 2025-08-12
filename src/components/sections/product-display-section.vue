<script setup lang="ts">
import { ref } from "vue";
import { sneakerImages } from "@/constants";
import { ProductImageCarousel } from "@/components/elements";
import type { SneakerImage } from "@/types/shared";
import { cn } from "@/lib/utils";

const selectedImage = ref<SneakerImage>(sneakerImages[0]);
const handleSelect = (image: SneakerImage) => (selectedImage.value = image);
</script>

<template>
  <section class="mx-auto w-full max-w-lg space-y-4 md:space-y-6 lg:space-y-8">
    <ProductImageCarousel>
      <figure
        class="bg-orange relative grid aspect-square place-content-center overflow-hidden rounded-2xl"
      >
        <img :src="selectedImage.src" class="size-full object-cover" />
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
