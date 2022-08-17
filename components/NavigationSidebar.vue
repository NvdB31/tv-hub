<template>
  <nav class="w-60 border-r relative flex-none">
    <div class="sticky top-0">
      <div class="p-8">
        <img
          src="/assets/images/tv-hub-logo.svg"
          class="h-10"
          alt="TV Hub Logo"
        />
      </div>
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
