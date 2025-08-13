<script setup lang="ts">
import { IconMenu } from "@/assets/svgs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVLINKS } from "@/constants/links";
</script>

<template>
  <Sheet>
    <SheetTrigger asChild>
      <button class="grid size-8 place-content-center rounded-md lg:hidden">
        <IconMenu />
      </button>
    </SheetTrigger>
    <SheetContent side="left" class="pt-12">
      <SheetHeader class="sr-only">
        <SheetTitle>Mobile Menu</SheetTitle>
      </SheetHeader>

      <menu class="flex flex-col gap-5 p-6 lg:hidden">
        <li
          v-for="{ label } in NAVLINKS"
          :key="label"
          class="text-very-dark-blue font-bold capitalize"
        >
          {{ label }}
        </li>
      </menu>
    </SheetContent>
  </Sheet>
</template>
