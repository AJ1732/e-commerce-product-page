<script setup lang="ts">
import type { SVGIconProps } from "@/types/svgs";
const props = defineProps<SVGIconProps>();
</script>

<template>
  <svg
    v-bind="props"
    :width="props.width || 12"
    :height="props.height || 18"
    viewBox="0 0 12 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 1 3 9l8 8"
      stroke="currentColor"
      stroke-width="3"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>
</template>
