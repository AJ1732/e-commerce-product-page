<script setup lang="ts">
import { Navbar } from "@/components/elements";
import {
  ProductDisplaySection,
  ProductInfoSection,
} from "@/components/sections";
</script>

<template>
  <div class="font-kumbh-sans min-h-dvh grid grid-rows-[auto_1fr_auto]">
    <Navbar />

    <main class="grid items-center max-w-[90rem] h-full mx-auto w-full pb-12 gap-8 sm:py-10 md:grid-cols-2 lg:gap-16 lg:py-20">
      <ProductDisplaySection />
      <ProductInfoSection />
    </main>
  </div>
</template>
