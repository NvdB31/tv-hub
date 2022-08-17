<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (title) => `TV Hub - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
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
