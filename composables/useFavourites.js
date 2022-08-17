/**
 * Adds to the favourites state.
 * @params {string} show – Show object.
 */
export const addToFavourites = (show) => {
  if (show) {
    const favourites = useState("favourites", () => []);
    favourites.value.push(show);
  }
};
