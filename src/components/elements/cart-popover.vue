<script setup lang="ts">
import { IconCart, IconTrash } from "@/assets/svgs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Button from "./button.vue";
import { ref } from "vue";

const quatity = ref<number>(1);
</script>
<template>
  <Popover>
    <PopoverTrigger>
      <button
        class="hover:bg-orange/20 grid size-9 place-content-center rounded-md md:size-10"
      >
        <IconCart class="size-5" />
      </button>
    </PopoverTrigger>
    <PopoverContent
      align="end"
      :alignOffset="-52"
      class="mt-4 w-[22rem] divide-y rounded-xl p-0"
    >
      <header class="text-very-dark-blue p-4 text-lg font-bold">Cart</header>
      <article class="p-5 py-6">
        <p
          v-if="quatity === 0"
          class="text-dark-grayish-blue mb-4 grid min-h-32 place-content-center font-medium"
        >
          Your cart is empty
        </p>
        <div v-else class="space-y-5">
          <div
            class="text-dark-grayish-blue grid grid-cols-[auto_1fr_auto] gap-x-4"
          >
            <figure class="bg-orange size-[3.25rem] rounded-md"></figure>

            <div>
              <h4 class="line-clamp-1">Fall Limited Edition Sneakers</h4>
              <p class="line-clamp-1">
                <span>$125</span> x <span>3</span>
                <span class="text-very-dark-blue ml-1 font-bold">$375.00</span>
              </p>
            </div>

            <button class="">
              <IconTrash class="text-grayish-blue size-5 hover:text-red-500" />
            </button>
          </div>
          <Button class="w-full">Checkout</Button>
        </div>
      </article>
    </PopoverContent>
  </Popover>
</template>
