/**
 * Gets a list of shows from TV Maze.
 * @returns an object with categorised lists of shows – Object
 */
export default async () => {
  const { data } = await useFetch("https://api.tvmaze.com/shows");

  // Sort shows by rating
  const shows = data.value?.sort(
    (a, b) => b.rating?.average - a.rating?.average
  );

  // Categorise the shows to easily access them by genre in the UI.
  const showsByGenres = shows.reduce((genreMap, show) => {
    const genres = show.genres;
    genres.forEach((genre) => {
      genre = genre.toLowerCase();
      if (!genreMap[genre]) genreMap[genre] = [];
      genreMap[genre].push(show);
    });

    return genreMap;
  }, {});

  const featuredShow = shows[0];
  const trendingShows = shows.slice(0, 10);
  const showsCurrentlyWatching = [
    { ...shows[5], progress: 32 },
    { ...shows[12], progress: 12 },
  ];

  return {
    shows,
    showsByGenres,
    featuredShow,
    trendingShows,
    showsCurrentlyWatching,
  };
};
