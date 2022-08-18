// Categorise the shows to easily access them by genre in the UI.
/**
 * Categorises shows by genre
 * @param {Array} - shows
 * @returns {Object} - Object with genre as keys, shows as Array value.
 */
export const categoriseShowsByGenres = (shows) =>
  shows.reduce((genreMap, show) => {
    const genres = show.genres;
    genres.forEach((genre) => {
      genre = genre.toLowerCase();
      if (!genreMap[genre]) genreMap[genre] = [];
      genreMap[genre].push(show);
    });

    return genreMap;
  }, {});

/**
 * Gets a list of shows from TV Maze.
 */
export default async () => {
  const { data } = await useFetch("https://api.tvmaze.com/shows");

  // Sort shows by rating
  const shows = data.value?.sort(
    (a, b) => b.rating?.average - a.rating?.average
  );

  const featuredShow = shows[3];
  const trendingShows = shows.slice(0, 10);
  const showsCurrentlyWatching = [
    { ...shows[5], progress: 32 },
    { ...shows[12], progress: 12 },
  ];

  const showsByGenres = categoriseShowsByGenres(shows);

  return {
    shows,
    showsByGenres,
    featuredShow,
    trendingShows,
    showsCurrentlyWatching,
  };
};
