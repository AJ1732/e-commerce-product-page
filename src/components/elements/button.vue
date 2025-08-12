<script lang="ts" setup>
import { cn } from "@/lib/utils";

import type { ButtonProps } from "@/types/button";

const props = defineProps<ButtonProps>();
const { className, ...rest } = props;
</script>

<template>
  <button
    :class="
      cn(
        'bg-orange text-very-dark-blue flex h-14 items-center justify-center gap-2 rounded-xl px-6 leading-0 font-bold',
        className,
      )
    "
    v-bind="rest"
  >
    <slot />
  </button>
</template>
