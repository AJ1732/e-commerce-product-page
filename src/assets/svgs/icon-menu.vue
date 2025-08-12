<script setup lang="ts">
import type { SVGIconProps } from "@/types/svgs";
const props = defineProps<SVGIconProps>();
</script>

<template>
  <svg
    v-bind="props"
    :width="props.width || 16"
    :height="props.height || 15"
    viewBox="0 0 16 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
      fill="currentColor"
      fill-rule="evenodd"
    />
  </svg>
</template>
