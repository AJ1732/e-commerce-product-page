<script setup lang="ts">
import { ref } from "vue";
import { sneakerImages } from "@/constants";
import type { SneakerImage } from "@/types/shared";

const selectedImage = ref<SneakerImage>(sneakerImages[0]);

// Sets the
const handleClick = (image: SneakerImage) => (selectedImage.value = image);
</script>

<template>
  <section class="mx-auto w-full max-w-lg space-y-4 md:space-y-6 lg:space-y-8">
    <figure
      class="bg-orange relative grid aspect-square place-content-center overflow-hidden rounded-3xl"
    >
      <img :src="selectedImage.src" class="size-full object-cover" />
    </figure>

    <ul class="grid w-full grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      <li
        v-for="image in sneakerImages"
        :key="image.id"
        @click="handleClick(image)"
        class="bg-orange relative grid aspect-square w-full place-content-center overflow-hidden rounded-2xl"
      >
        <img :src="image.thumbnail" class="size-full object-cover" />
      </li>
    </ul>
  </section>
</template>
