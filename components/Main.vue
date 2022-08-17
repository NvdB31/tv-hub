<template>
  <main class="flex-grow main bg-neutral-100 w-full pt-14 md:pt-0">
    <Container class="bg-white 2xl:border-x">
      <slot />
    </Container>
  </main>
</template>

<style scoped>
@media screen and (min-width: 1280px) {
  .main {
    max-width: calc(100vw - 35rem);
  }
}
</style>
