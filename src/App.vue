<script setup lang="ts">
import { Navbar } from "@/components/elements";
import {
  ProductDisplaySection,
  ProductInfoSection,
} from "@/components/sections";
</script>

<template>
  <div class="font-kumbh-sans content-grid min-h-dvh grid-rows-[auto_1fr_auto]">
    <Navbar />

    <main class="grid items-center gap-12 py-20 md:grid-cols-2 lg:gap-20">
      <ProductDisplaySection />
      <ProductInfoSection />
    </main>
  </div>
</template>
