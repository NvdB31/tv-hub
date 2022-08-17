<template>
  <div
    class="h-screen flex items-center flex-col gap-4 text-neutral-500 justify-center"
  >
    <i class="text-5xl far" :class="icon" />
    <h1 class="font-semibold text-3xl text-neutral-500">{{ title }}</h1>
    <p>
      This page is yet to be implemented. For this demo, only 'Home' and shows
      pages work.
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>
