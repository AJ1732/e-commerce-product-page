<script setup lang="ts">
import { ref } from "vue";

const images = Array.from({ length: 4 });
const selectedIndex = ref<number>(0);

const handleClick = (i: number) => {
  selectedIndex.value = i;
};
</script>

<template>
  <section class="mx-auto w-full max-w-lg space-y-4 md:space-y-6 lg:space-y-8">
    <figure
      class="bg-orange grid aspect-square place-content-center rounded-3xl"
    >
      <span v-if="selectedIndex !== null">{{ selectedIndex }}</span>
    </figure>
    <ul class="grid w-full grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      <li
        v-for="(_, i) in images"
        :key="i"
        @click="handleClick(i)"
        class="bg-orange grid aspect-square w-full place-content-center rounded-2xl"
      >
        {{ i }}
      </li>
    </ul>
  </section>
</template>
