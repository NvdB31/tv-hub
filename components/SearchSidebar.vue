<template>
  <aside
    class="xl:w-80 border-l flex-none bg-white xl:relative transition-all xl:transition-none shadow-lg xl:shadow-none fixed z-20 w-full xl:block inset-0 xl:inset-auto scale-90 opacity-0 xl:opacity-100 xl:scale-100 overflow-y-scroll pointer-events-none xl:pointer-events-auto"
    :class="{ 'opacity-100 scale-100 pointer-events-auto': showSearchSidebar }"
    :aria-hidden="!showSearchSidebar"
  >
    <button
      @click="showSearchSidebar = false"
      class="h-6 w-6 block mt-4 mr-4 xl:hidden ml-auto"
    >
      <i class="far fa-close" />
    </button>
    <div class="xl:sticky top-0">
      <div class="py-4 px-6 xl:py-8 xl:px-12">
        <SearchBar @input="handleSearch" :query="searchQuery" />
        <div class="flex flex-col items-center gap-2" v-if="isLoading">
          <i class="fas fa-circle-notch fa-spin text-lg" />
          <span class="text-neutral-500 text-sm">Searching shows...</span>
        </div>
        <div v-else>
          <SidebarShowsList
            :title="`Search results (${searchResults.length})`"
            :shows="searchResults"
            v-if="searchQuery"
            @click="showSearchSidebar = false"
          />
          <SidebarShowsList
            title="Airing now"
            :shows="shows"
            v-else
            @click="showSearchSidebar = false"
          />
        </div>
      </div>
      <div class="py-4 px-6 xl:py-8 xl:px-12">
        <SidebarShowsList title="Favourites" :shows="favourites">
          <template v-slot:empty-state
            ><div
              class="flex flex-col gap-2 items-center p-8 text-center text-sm text-neutral-500 bg-neutral-100 rounded-lg"
            >
              <i class="far fa-star text-base" />
              Click + to add your first favourite.
            </div></template
          >
        </SidebarShowsList>
      </div>
    </div>
  </aside>
</template>

<script setup>
import debounce from "lodash.debounce";

const showSearchSidebar = useState("showSearchSidebar", () => false);
const shows = await useSchedule();
const searchResults = ref([]);
const isLoading = ref(false);
const searchQuery = ref(null);
const favourites = useState("favourites", () => []);

/**
 * Handles search by setting the search query state, and calling the debounced handler for the API call.
 */
const handleSearch = (query) => {
  searchQuery.value = query;
  isLoading.value = true;
  if (query) {
    _debouncedHandleSearch(searchQuery.value);
  } else {
    searchResults.value = [];
    isLoading.value = false;
  }
};

const _debouncedHandleSearch = debounce(
  async (query) => {
    const result = await $fetch(
      `https://api.tvmaze.com/search/shows?q=${searchQuery.value}`
    );
    searchResults.value = result.map((item) => item.show);
    isLoading.value = false;
  },
  600,
  { leading: false, trailing: true }
);
</script>
