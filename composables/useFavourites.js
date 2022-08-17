/**
 * Adds to the favourites state.
 * @params {string} show – Show object.
 */
export const addToFavourites = (show) => {
  const favourites = useState("favourites", () => []);
  const alreadyExists = favourites.value.find(
    (savedShow) => savedShow.id === show.id
  );
  if (show && !alreadyExists) {
    favourites.value.push(show);
  }
};
