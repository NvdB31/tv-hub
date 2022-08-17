<template>
  <section class="grid grid-cols-5 p-12 pt-6 gap-12">
    <div class="col-span-2">
      <img :src="image" class="rounded-2xl mb-4" />
      <ul class="flex gap-3 mb-8 text-xs">
        <li
          v-for="genre in genres"
          class="border bg-neutral-100 rounded-full px-3 p-1"
        >
          {{ genre }}
        </li>
      </ul>
    </div>
    <div class="col-span-3">
      <div class="flex mb-4 justify-between items-center">
        <h1 class="text-4xl font-semibold">{{ title }}</h1>
        <AppButton
          icon="far fa-plus"
          class="text-white ml-auto"
          @click.prevent.stop="$emit('addToFavourites')"
        />
      </div>
      <div class="text-neutral-500 mb-8">
        {{ formattedYear }} • {{ runtime }} min. •
        {{ language }}
        •
        <div class="inline-block">
          <i class="fas fa-star text-yellow-400 text-sm" /> 4.5
        </div>
      </div>
      <div v-html="summary" class="leading-relaxed"></div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  runtime: Number,
  language: String,
  premiered: String,
  genres: Array,
  description: String,
  summary: String,
});

defineEmits(["add-to-favourites"]);

const formattedYear = Intl.DateTimeFormat("en-NL", {
  year: "numeric",
}).format(new Date(props.premiered));
</script>
