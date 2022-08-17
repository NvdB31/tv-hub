<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
useHead({
  title: "TV Hub – Discover the best TV Shows",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "og:title", content: `TV Hub - Discover the best TV Shows` }],
  script: [
    {
      src: "https://kit.fontawesome.com/cf9b49afdd.js",
      body: true,
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>
