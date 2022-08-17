<template>
  <nuxt-link
    :to="`/shows/${id}`"
    class="relative snap-center group w-1/3 xl:w-1/4 flex-none"
  >
    <div
      class="relative flex flex-col justify-between overflow-hidden transition-all aspect-[9/12] bg-neutral-100 rounded-xl hover:shadow-lg"
    >
      <img
        :src="image"
        class="absolute inset-0 group-hover:scale-125 duration-[7s] w-full h-full object-cover"
        :alt="`Movie poster of ${title}`"
      />
      <div class="p-3 xl:p-4 z-10">
        <AppButton
          size="small"
          icon="far fa-plus"
          class="text-white ml-auto"
          @click.prevent.stop="$emit('addToFavourites', id)"
        />
      </div>
      <div
        class="text-center p-2 xl:p-4 bg-gradient-to-b from-black/0 to-black/80 text-white z-10 pt-4"
      >
        <h3 class="font-semibold text-white mb-1">{{ title }}</h3>
        <div class="text-xs">
          <i class="fa fa-star text-yellow-400" />
          {{ ratingStars }}
        </div>
      </div>
    </div>
    <!-- Progress bar -->
    <div
      v-if="progress"
      class="h-2 bg-secondary-100 z-20 mt-4 bottom-0 rounded-xl overflow-hidden mx-4"
    >
      <div
        :style="{ width: `${progress}%` }"
        class="h-full bg-secondary-500"
      ></div>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  rating: Number,
  image: String,
  progress: Number,
});

const emits = defineEmits(["addToFavourites"]);

/**
 * Computed function to round the rating to scale of stars.
 */
const ratingStars = (Math.round((props.rating / 2) * 10) / 10).toFixed(1);
</script>
