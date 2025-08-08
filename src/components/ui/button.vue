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
        'bg-orange flex h-12 w-fit items-center justify-center gap-2 rounded-full px-6 leading-0 text-white',
        className,
      )
    "
    v-bind="rest"
  >
    <slot />
  </button>
</template>
