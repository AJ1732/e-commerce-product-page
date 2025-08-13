<script setup lang="ts">
import gsap from "gsap";
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { IconCart, IconPlus, IconMinus } from "@/assets/svgs";
import { products } from "@/constants";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

import { Button } from "../elements";

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
const { addToCart, increment, decrement } = cartStore;

const { id, title, description, price, discount } = products[0];
const isAdded = computed(() => items.value.some((item) => item.id === id));
const productInCart = computed(() =>
  items.value.find((item) => item.id === id),
);

// watch(
//   productInCart,
//   (newVal) => {
//     console.log("Cart updated:", newVal);
//   },
//   { deep: true },
// );

const beforeEnter = (el: Element) => {
  gsap.set(el as HTMLElement, {
    opacity: 0,
    x: -10,
  });
};
const enter = (el: Element, done: () => void) => {
  gsap.to(el as HTMLElement, {
    opacity: 1,
    x: 0,
    duration: 0.4,
    ease: "power2.out",
    onComplete: done,
  });
};
const leave = (el: Element, done: () => void) => {
  gsap.to(el as HTMLElement, {
    opacity: 0,
    x: -10,
    duration: 0.3,
    ease: "power2.in",
    onComplete: done,
  });
};
</script>

<template>
  <section
    class="content-grid mx-auto w-full max-w-[calc(32rem+5rem)] lg:max-w-[calc(32rem+2.5rem)] space-y-6 md:space-y-8 lg:space-y-10"
  >
    <div>
      <p
        class="text-dark-grayish-blue mb-3 text-xs font-bold tracking-wider uppercase md:mb-5 md:text-sm"
      >
        Sneaker company
      </p>
      <h1
        class="text-very-dark-blue text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-[110%]"
      >
        {{ title }}
      </h1>
    </div>

    <article class="space-y-6">
      <p class="text-dark-grayish-blue max-md:leading-[175%] lg:text-lg">
        {{ description }}
      </p>
      <div
        class="flex grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 md:grid"
      >
        <p class="text-2xl font-bold md:text-3xl lg:text-4xl">
          ${{ price - price * discount }}.00
        </p>
        <span
          class="bg-very-dark-blue inline-block w-fit rounded-md px-2.5 py-1 text-xs font-bold tracking-wide text-white md:text-sm"
          >{{ discount * 100 }}%</span
        >
        <p
          class="text-dark-grayish-blue font-bold line-through max-md:ml-auto max-md:text-xs lg:text-lg"
        >
          ${{ price }}.00
        </p>
      </div>

      <div class="grid gap-x-3 gap-y-4 md:grid-cols-[auto_1fr]">
        <div
          :class="
            cn(
              'bg-light-grayish-blue flex h-14 items-center gap-4 rounded-xl px-2 font-bold max-md:justify-between lg:gap-8',
              '[&>button]:text-orange [&>button]:grid [&>button]:h-8 [&>button]:place-content-center [&>button]:px-4 [&>button]:text-2xl [&>button]:leading-none',
            )
          "
        >
          <button @click="decrement(id)">
            <IconMinus />
          </button>
          <span>{{ productInCart?.quantity || 0 }}</span>
          <button @click="increment(products[0])">
            <IconPlus />
          </button>
        </div>
        <Button
          @click="() => addToCart(products[0])"
          class="text-very-dark-blue"
        >
          <transition
            mode="out-in"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <span
              :key="isAdded ? 'added' : 'add'"
              class="flex items-center gap-2"
            >
              <IconCart
                class="size-[1.125rem] transition-all duration-300 ease-in-out"
              />
              {{ isAdded ? "Added" : "Add" }} to cart
            </span>
          </transition>
        </Button>
      </div>
    </article>
  </section>
</template>
