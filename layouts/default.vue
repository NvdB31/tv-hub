<template>
  <div class="flex flex-col xl:flex-row w-screen flex-wrap overflow-hidden">
    <MobileNavbar />
    <NavigationSidebar />
    <slot />
    <SearchSidebar />
  </div>
  <AppFooter />
</template>
