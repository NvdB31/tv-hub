<template>
  <nuxt-link :to="`/shows/${id}`" class="flex py-2 gap-4">
    <img
      :src="image"
      :alt="`Movie poster of ${title}`"
      class="h-20 rounded-md"
      v-if="image"
    />
    <div
      class="w-[3.75rem] h-20 bg-neutral-200 rounded-md flex items-center justify-center"
      v-else
    >
      <i class="far fa-film text-neutral-400" />
    </div>
    <div>
      <div class="font-bold leading-none mb-1">{{ title }}</div>
      <div class="text-xs text-neutral-500" v-if="formattedDate">
        {{ formattedDate }}
      </div>
      <ul
        class="text-xs flex gap-1 mb-8 text-neutral-500 whitespace-nowrap"
        v-else-if="genres"
      >
        <li v-for="genre in genres">
          {{ genre }}
        </li>
      </ul>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  image: String,
  genres: Array,
  network: String,
  airstamp: String,
});

const formattedDate = ref(null);

if (props.airstamp) {
  formattedDate.value = Intl.DateTimeFormat("en-NL", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(props.airstamp));
}
</script>
