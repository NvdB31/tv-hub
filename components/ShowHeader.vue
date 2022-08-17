<template>
  <section
    class="grid grid-cols-4 xl:grid-cols-5 p-4 xl:p-12 xl:pt-6 gap-6 xl:gap-12 items-end xl:items-start"
  >
    <div class="xl:col-span-2">
      <img :src="image" class="rounded-2xl xl:mb-4 shadow-lg" />
      <ul class="gap-3 mb-8 text-xs flex-wrap whitespace-nowrap hidden xl:flex">
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
        <h1 class="text-3xl xl:text-4xl font-semibold">{{ title }}</h1>
      </div>
      <div class="text-neutral-500 mb-4 xl:mb-8">
        {{ formattedYear }} • {{ runtime }} min. •
        {{ language }}
        •
        <div class="inline-block">
          <i class="fas fa-star text-yellow-400 text-sm" /> 4.5
        </div>
      </div>
      <ul class="flex gap-3 text-xs flex-wrap whitespace-nowrap xl:hidden">
        <li
          v-for="genre in genres"
          class="border bg-neutral-100 rounded-full px-3 p-1"
        >
          {{ genre }}
        </li>
      </ul>
      <div
        v-html="summary"
        class="leading-relaxed hidden xl:block text-neutral-600"
      ></div>
    </div>
    <div
      v-html="summary"
      class="leading-relaxed col-span-4 text-neutral-600 xl:hidden"
    ></div>
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
const formattedYear = Intl.DateTimeFormat("en-NL", {
  year: "numeric",
}).format(new Date(props.premiered));
</script>
