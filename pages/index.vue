<template>
  <Main>
    <FeaturedShow
      :id="featuredShow.id"
      :title="featuredShow.name"
      :image="featuredShow.image?.original"
      :genres="featuredShow.genres"
      :summary="featuredShow.summary"
      @add-to-favourites="addToFavourites(featuredShow)"
    />
    <ShowsList title="Popular right now" :shows="trendingShows" />
    <ShowsList title="Continue watching" :shows="showsCurrentlyWatching" />

    <ShowsList title="Thrillers" :shows="showsByGenres.mystery" />
    <ShowsList title="Comedy" :shows="showsByGenres.comedy" />
    <ShowsList title="Romance" :shows="showsByGenres.romance" />
    <ShowsList title="Drama" :shows="showsByGenres.drama" />
    <ShowsList title="Crime" :shows="showsByGenres.crime" />
  </Main>
</template>

<script setup>
import { addToFavourites } from "@/composables/useFavourites";
const {
  shows,
  showsByGenres,
  trendingShows,
  featuredShow,
  showsCurrentlyWatching,
} = await useShows();

useHead({
  title: "Discover the best TV shows",
});
</script>
