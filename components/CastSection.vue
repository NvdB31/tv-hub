<template>
  <div class="p-4 xl:p-8">
    <h2 class="text-xl xl:text-2xl font-semibold mb-2 xl:mb-4">Cast</h2>
    <div class="grid grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4">
      <div
        v-for="castMember in castList"
        class="flex items-center flex-col gap-2 text-center px-2 py-3 border rounded-lg overflow-clip"
      >
        <img
          :src="castMember.person?.image?.medium"
          class="rounded-full h-16 w-16 bg-neutral-200 object-cover"
          alt=""
        />
        <h3
          class="text-sm font-semibold leading-tight whitespace-nowrap text-ellipsis w-full"
        >
          {{ castMember.person?.name }}
        </h3>
        <div class="text-xs text-neutral-500">
          as {{ castMember.character?.name }}
        </div>
      </div>
    </div>
    <AppButton
      @click="showAllCast = !showAllCast"
      v-if="cast.length > 8"
      type="outline"
      class="w-full justify-center flex mt-8 max-w-sm mx-auto"
      >{{ showAllCast ? "Show less" : "Show all" }}</AppButton
    >
  </div>
</template>

<script setup>
const props = defineProps({
  cast: Array,
});

const showAllCast = ref(false);

const castList = computed(() => {
  return showAllCast.value ? props.cast : props.cast.slice(0, 8);
});
</script>
