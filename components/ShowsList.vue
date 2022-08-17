<template>
  <section class="px-8 py-12 pb-0 w-full relative overflow-hidden">
    <h2 class="text-xl xl:text-2xl font-semibold mb-2">{{ title }}</h2>
    <div
      ref="list"
      class="-mx-8 flex snap-x snap-mandatory scroll-px-8 gap-2 overflow-x-scroll px-8 md:gap-4 lg:gap-8 py-6"
    >
      <ShowsListItem
        v-for="show in shows"
        :title="show.name"
        :id="show.id"
        :image="show.image.medium"
        :rating="show.rating?.average"
        :progress="show.progress"
        @add-to-favourites="addToFavourites(show)"
      />
    </div>
  </section>
</template>

<script setup>
import { addToFavourites } from "@/composables/useFavourites";

const props = defineProps({
  title: String,
  shows: Array,
});
</script>
