<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <template v-if="shows.length">
      <SidebarShowsListItem
        v-for="show in shows"
        :id="show._embedded?.show.id || show.id"
        :title="show._embedded?.show.name || show.name"
        :genres="show.genres"
        :image="show._embedded?.show?.image?.medium || show.image?.medium"
        :airstamp="show.airstamp"
      />
    </template>
    <div v-else>
      <slot name="empty-state" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  shows: Array,
});
</script>
