/**
 * Gets a single show from TV Maze.
 * @returns {Object} - an object with details about a show
 */
export default async (id) => {
  return $fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`);
};
