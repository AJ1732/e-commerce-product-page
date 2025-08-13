<script setup lang="ts">
import { computed, ref } from "vue";

import { IconPrevious, IconNext } from "@/assets/svgs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sneakerImages } from "@/constants";
import { cn } from "@/lib/utils";
import type { SneakerImage } from "@/types/shared";

const selectedIndex = ref(0);

const selectedImage = computed(() => sneakerImages[selectedIndex.value]);
const handleSelect = (image: SneakerImage) =>
  (selectedIndex.value = image.id - 1);

const goNext = () => {
  selectedIndex.value = (selectedIndex.value + 1) % sneakerImages.length;
};

const goPrevious = () => {
  selectedIndex.value =
    (selectedIndex.value - 1 + sneakerImages.length) % sneakerImages.length;
};
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <slot />
    </DialogTrigger>
    <DialogContent class="p-0 max-md:hidden">
      <DialogHeader class="sr-only">
        <DialogTitle>Image</DialogTitle>
      </DialogHeader>

      <section
        class="mx-auto w-full max-w-lg space-y-4 md:space-y-6 lg:space-y-7"
      >
        <div
          :class="
            cn(
              'relative',
              '[&>button]:hover:text-orange [&>button]:absolute [&>button]:z-10 [&>button]:grid [&>button]:size-11 [&>button]:-translate-y-1/2 [&>button]:place-content-center [&>button]:rounded-full [&>button]:bg-white',
            )
          "
        >
          <button @click="goPrevious" class="top-1/2 left-0 -translate-x-1/2">
            <IconPrevious class="-ml-1 size-4" />
          </button>

          <figure
            class="bg-orange relative grid aspect-square w-full place-content-center overflow-hidden rounded-2xl"
          >
            <img :src="selectedImage.src" class="size-full object-cover" />
          </figure>

          <button @click="goNext" class="top-1/2 right-0 translate-x-1/2">
            <IconNext class="ml-1 size-4" />
          </button>
        </div>

        <ul class="grid w-full grid-cols-4 gap-4 px-10 md:gap-6 lg:gap-6">
          <li
            v-for="image in sneakerImages"
            :key="image.id"
            @click="handleSelect(image)"
            :class="
              cn(
                'border-orange relative grid aspect-square w-full cursor-pointer place-content-center overflow-hidden rounded-lg bg-white transition-colors duration-200 ease-in-out hover:border',
                { 'border-orange border-2': image.src === selectedImage.src },
              )
            "
          >
            <img
              :src="image.thumbnail"
              :class="
                cn(
                  'size-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-50',
                  {
                    'opacity-50': image.src === selectedImage.src,
                  },
                )
              "
            />
          </li>
        </ul>
      </section>
    </DialogContent>
  </Dialog>
</template>
