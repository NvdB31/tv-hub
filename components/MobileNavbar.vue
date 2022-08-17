<template>
  <nav
    class="flex justify-between items-center border-b xl:hidden absolute top-0 z-20 bg-white w-full h-14"
  >
    <button class="p-4" @click="showNavSidebar = true">
      <i class="far fa-bars" />
    </button>
    <nuxt-link to="/"
      ><img src="/assets/images/tv-hub-logo.svg" class="h-6" alt="TV Hub Logo"
    /></nuxt-link>
    <button class="p-4" @click="showSearchSidebar = true">
      <i class="far fa-search" />
    </button>
  </nav>
</template>

<script setup>
const showNavSidebar = useState("showNavSidebar", () => false);
const showSearchSidebar = useState("showSearchSidebar", () => false);
</script>
