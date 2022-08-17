<template>
  <nav
    class="w-60 border-r flex-none h-full xl:h-auto fixed z-20 bg-white xl:relative -translate-x-full xl:translate-x-0 transition-transform xl:transition-none shadow-lg xl:shadow-none"
    :class="{ 'translate-x-0': showNavSidebar }"
    :aria-hidden="!showNavSidebar"
  >
    <div class="xl:sticky top-0">
      <nuxt-link to="/" class="p-8 hidden xl:block">
        <img
          src="/assets/images/tv-hub-logo.svg"
          class="h-10"
          alt="TV Hub Logo"
        />
      </nuxt-link>
      <button
        @click="showNavSidebar = false"
        class="h-6 w-6 block mt-4 ml-4 xl:hidden"
      >
        <i class="far fa-close" />
      </button>
      <div v-for="group in navGroups" class="py-6 px-0">
        <div
          class="px-8 font-semibold mb-3 uppercase text-neutral-400 tracking-wide text-sm"
        >
          {{ group.label }}
        </div>
        <ul class="p-0 mb-0">
          <li
            class="px-8 flex gap-4 items-center py-1 my-1 text-neutral-500 hover:text-secondary-400 transition-colors"
            :class="{
              'border-r border-r-4 border-secondary-500 font-semibold text-neutral-800':
                $route.path === item.path,
            }"
            v-for="item in group.navItems"
          >
            <nuxt-link :to="item.path" class="w-full"
              ><i :class="item.icon" class="w-6"></i>
              {{ item.title }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showNavSidebar = useState("showNavSidebar", () => false);
const navGroups = [
  {
    label: "Menu",
    navItems: [
      {
        title: "Home",
        icon: "far fa-home",
        path: "/",
      },
      {
        title: "New & Popular",
        icon: "far fa-fire-flame-curved",
        path: "/new-and-popular",
      },
      {
        title: "My Lists",
        icon: "far fa-list",
        path: "/my-lists",
      },
    ],
  },
  {
    label: "Social",
    navItems: [
      {
        title: "Community",
        icon: "far fa-home",
        path: "/community",
      },
      {
        title: "Friends",
        icon: "far fa-user-group",
        path: "/friends",
      },
      {
        title: "Parties",
        icon: "far fa-party-horn",
        path: "/parties",
      },
    ],
  },
  {
    label: "General",
    navItems: [
      {
        title: "Settings",
        icon: "far fa-cog",
        path: "/settings",
      },
      {
        title: "Sign out",
        icon: "far fa-sign-out",
        path: "/sign-out",
      },
    ],
  },
];
</script>
