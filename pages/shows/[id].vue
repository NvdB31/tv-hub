<template>
  <Main>
    <div class="pt-4 px-4 xl:pt-12 xl:px-12">
      <nuxt-link
        to="/"
        class="hover:underline text-neutral-500 text-sm xl:text-base"
        ><i class="far fa-arrow-left-long mr-2" />Back to home</nuxt-link
      >
    </div>
    <ShowHeader
      :title="currentShow.name"
      :runtime="currentShow.runtime"
      :language="currentShow.language"
      :premiered="currentShow.premiered"
      :image="currentShow.image?.original"
      :genres="currentShow.genres"
      :summary="currentShow.summary"
      v-if="currentShow"
    />
    <CastSection
      :cast="currentShow._embedded.cast"
      v-if="currentShow._embedded.cast.length"
    />
    <ShowsList
      title="You might also like"
      :shows="relevantShows"
      v-if="relevantShows?.length"
    />
  </Main>
</template>

<script setup>
const route = useRoute();
const { showsByGenres } = await useShows();
const currentShow = ref(null);
const relevantShows = ref([]);

currentShow.value = await useSingleShow(route.params.id);
if (currentShow.value) {
  relevantShows.value =
    showsByGenres[currentShow.value.genres[0]?.toLowerCase()];
}

useHead({
  title: `TV Hub – ${currentShow.value.name}`,
  meta: [
    { name: "og:image", content: currentShow.value?.image?.medium },
    { name: "og:description", content: currentShow.value?.summary },
  ],
});
</script>
