<template>
  <div class="p-12 pb-0">
    <div
      class="relative flex justify-between aspect-video rounded-2xl overflow-hidden"
    >
      <!-- Nice background by using the movie poster with a very large blur -->
      <div
        class="absolute inset-0 bg-black h-full w-full flex items-center justify-center"
      >
        <img
          :src="image"
          alt=""
          class="h-full w-full scale-150 object-cover object-top blur-[50px]"
        />
      </div>

      <!-- Title, genres, summary and play buttons -->
      <div
        class="w-4/5 p-8 2xl:p-16 flex flex-col justify-between h-full relative"
      >
        <div class="flex items-center text-sm">
          <img
            src="https://i.pravatar.cc/150?img=1"
            class="w-6 h-6 -mr-2 rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=2"
            class="w-6 h-6 -mr-2 rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=3"
            class="w-6 h-6 -mr-2 rounded-full"
          />
          <div class="ml-4 text-black invert mix-blend-overlay">
            +6 friends are watching this
          </div>
        </div>
        <div>
          <h1
            class="text-4xl font-bold mb-4 text-white invert mix-blend-overlay"
          >
            {{ title }}
          </h1>
          <ul class="flex gap-3 mb-8">
            <li
              v-for="genre in genres"
              class="inline text-white/70 invert mix-blend-overlay"
            >
              {{ genre }}
            </li>
          </ul>
          <div v-html="summary" class="featured-show__summary"></div>
          <div class="flex gap-4 mt-8 items-center">
            <AppButton icon="far fa-play" class="text-white mix-blend-overlay"
              >Play Show</AppButton
            >
            <AppButton
              icon="far fa-plus"
              type="ghost"
              class="mix-blend-overlay self-stretch"
              @click="$emit('add-to-favourites')"
            />
            <nuxt-link :to="`/shows/${id}`" class="hover:underline"
              >Read more</nuxt-link
            >
          </div>
        </div>
      </div>

      <!-- Movie poster -->
      <div class="h-full w-3/5 z-10">
        <img
          :src="image"
          alt=""
          class="h-full w-full object-cover object-bottom"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  genres: Array,
  image: String,
  summary: String,
});

defineEmits(["add-to-favourites"]);
</script>

<style scoped>
/* Custom CSS due to Tailwind not supporting line-clamp feature */
.featured-show__summary {
  @apply overflow-hidden mb-2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
