<script setup lang="ts">
import { IconCart, IconPlus, IconMinus } from "@/assets/svgs";
import { Button } from "@/components";
import { cn } from "@/lib/utils";
</script>

<template>
  <section class="mx-auto w-full max-w-lg space-y-6 md:space-y-8 lg:space-y-10">
    <div>
      <p
        class="text-dark-grayish-blue mb-3 text-xs font-bold tracking-wider uppercase md:mb-5 md:text-sm"
      >
        Sneaker company
      </p>
      <h1
        class="text-very-dark-blue text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-[110%]"
      >
        Fall Limited Edition Sneakers
      </h1>
    </div>

    <article class="space-y-6">
      <p
        class="text-dark-grayish-blue max-md:text-sm max-md:leading-[175%] lg:text-lg"
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable runbber outer sole, they'l withstand everything the
        weather can offer.
      </p>
      <div class="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">
        <p class="text-3xl font-bold lg:text-4xl">$125.00</p>
        <span
          class="bg-very-dark-blue inline-block w-fit rounded-md px-2.5 py-1 text-xs font-bold tracking-wide text-white md:text-sm"
          >50%</span
        >
        <p
          class="text-dark-grayish-blue font-bold line-through max-md:text-xs lg:text-lg"
        >
          $250.00
        </p>
      </div>

      <div class="grid grid-cols-[auto_1fr] gap-x-3">
        <div
          :class="
            cn(
              'bg-light-grayish-blue flex h-14 items-center gap-4 rounded-xl px-2 font-bold lg:gap-8',
              '[&>button]:text-orange [&>button]:grid [&>button]:size-8 [&>button]:place-content-center [&>button]:text-2xl [&>button]:leading-none',
            )
          "
        >
          <button>
            <IconMinus />
          </button>
          <span>0</span>
          <button>
            <IconPlus />
          </button>
        </div>
        <Button class="text-very-dark-blue">
          <IconCart class="size-[1.125rem]" />
          Add to cart
        </Button>
      </div>
    </article>
  </section>
</template>
