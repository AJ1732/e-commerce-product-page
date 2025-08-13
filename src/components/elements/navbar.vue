<script lang="ts" setup>
import { Logo } from "@/assets/svgs";
import { assets } from "@/assets/images";
import { NAVLINKS } from "@/constants/links";

import CartPopover from "./cart-popover.vue";
import MobileMenuSheet from "./mobile-menu-sheet.vue";
</script>

<template>
  <header class="content-grid">
    <nav
      class="border-light-grayish-blue flex h-16 items-center gap-4 border-b md:gap-6 lg:h-24 lg:gap-20"
    >
      <MobileMenuSheet />
      <Logo class="mb-1 max-lg:mr-auto" />

      <menu class="flex gap-6 max-lg:hidden">
        <li
          v-for="{ label } in NAVLINKS"
          :key="label"
          class="text-dark-grayish-blue hover:text-very-dark-blue cursor-pointer text-sm capitalize"
        >
          {{ label }}
        </li>
      </menu>

      <div class="ml-auto flex items-center gap-4 md:gap-6">
        <CartPopover />
        <button>
          <figure class="size-8 overflow-hidden rounded-full md:size-10">
            <img :src="assets['image-avatar']" class="size-full object-cover" />
          </figure>
        </button>
      </div>
    </nav>
  </header>
</template>
