<template>
  <div class="mb-8">
    <label for="search" class="block text-sm font-medium text-gray-700 sr-only"
      >Search</label
    >
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <span class="text-gray-500 sm:text-sm">
          <i class="far fa-search" />
        </span>
      </div>
      <input
        type="text"
        name="search"
        autocomplete="off"
        :value="query"
        id="search"
        class="focus:ring-black focus:border-black block w-full pl-8 py-3 pr-12 sm:text-sm border-gray-300 rounded-full"
        placeholder="Search for a TV show"
        @input="(event) => $emit('input', event.target.value)"
      />
      <button
        @click="$emit('input', null)"
        class="absolute inset-y-0 right-2 pr-3 flex items-center"
        v-if="query"
      >
        <i class="far fa-close" />
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["input"]);
defineProps({
  query: String,
});
</script>
