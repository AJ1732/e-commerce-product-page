<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";

import { IconCart, IconTrash } from "@/assets/svgs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartStore } from "@/store/cart";

import Button from "./button.vue";

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
const { removeFromCart } = cartStore;
const quantity = computed(() => items.value.length);

// watch(
//   quantity,
//   (newVal) => {
//     console.log("Cart updated:", newVal);
//   },
//   { deep: true },
// );
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
      :alignOffset="-57"
      class="mt-4 w-[22rem] divide-y rounded-xl p-0"
    >
      <header class="text-very-dark-blue p-4 text-lg font-bold">Cart</header>
      <article class="p-5 py-6">
        <p
          v-if="quantity === 0"
          class="text-dark-grayish-blue mb-4 grid min-h-32 place-content-center font-medium"
        >
          Your cart is empty
        </p>
        <div v-else class="space-y-5">
          <div
            v-for="{ id, title, images, price, discount, quantity } in items"
            :key="id"
            class="text-dark-grayish-blue grid grid-cols-[auto_1fr_auto] gap-x-4"
          >
            <figure
              class="bg-orange relative size-[3.25rem] overflow-hidden rounded-sm"
            >
              <img :src="images[0].src" class="size-full object-cover" />
            </figure>

            <div>
              <h4 class="line-clamp-1">{{ title }}</h4>
              <p class="line-clamp-1">
                <span>${{ price - price * discount }}</span> x
                <span>{{ quantity }}</span>
                <span class="text-very-dark-blue ml-2 font-bold"
                  >${{ (price - price * discount) * quantity }}.00</span
                >
              </p>
            </div>

            <button @click="() => removeFromCart(id)">
              <IconTrash class="text-grayish-blue size-5 hover:text-red-500" />
            </button>
          </div>
          <Button class="w-full">Checkout</Button>
        </div>
      </article>
    </PopoverContent>
  </Popover>
</template>
