<script lang="ts" setup>
const NAVLINKS = [
  { label: "collections" },
  { label: "men" },
  { label: "women" },
  { label: "about" },
  { label: "contact" },
];
</script>

<template>
  <header
    class="border-light-grayish-blue flex h-28 items-center gap-4 border-b md:gap-6 lg:gap-20"
  >
    <button class="bg-very-dark-blue size-8 rounded-md lg:hidden"></button>
    <h1 class="mr-auto text-2xl leading-0 font-bold">sneakers</h1>

    <menu class="flex gap-6 max-lg:hidden">
      <li
        v-for="{ label } in NAVLINKS"
        :key="label"
        class="text-dark-grayish-blue text-sm capitalize"
      >
        {{ label }}
      </li>
    </menu>

    <div class="ml-auto flex items-center gap-4">
      <div class="bg-very-dark-blue size-8 rounded-full"></div>
      <div class="bg-very-dark-blue size-10 rounded-full"></div>
    </div>
  </header>
</template>
