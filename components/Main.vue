<template>
  <main class="flex-grow main bg-neutral-100">
    <Container class="bg-white 2xl:border-x">
      <slot />
    </Container>
  </main>
</template>

<style scoped>
.main {
  max-width: calc(100vw - 35rem);
}
</style>
