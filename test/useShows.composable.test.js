import { test, expect } from "vitest";
import { categoriseShowsByGenres } from "../composables/useShows";

test("Creates a map of shows by genre", () => {
  // Arrange: Mock some shows for testing
  const mockedShows = [
    {
      id: 0,
      name: "Perfect Storm",
      genres: ["Thriller", "Crime", "Drama"],
    },
    {
      id: 1,
      name: "Another Nice Show",
      genres: ["Comedy", "Drama"],
    },
    {
      id: 2,
      name: "",
      genres: ["Comedy", "Action"],
    },
  ];

  // Act: Categorise the shows
  const showsByGenres = categoriseShowsByGenres(mockedShows);

  // Assert: the total number of genres
  expect(Object.keys(showsByGenres).length).toStrictEqual(5);

  // Assert: the number of shows per genre
  expect(showsByGenres["thriller"].length).toStrictEqual(1);
  expect(showsByGenres["comedy"].length).toStrictEqual(2);
  expect(showsByGenres["crime"].length).toStrictEqual(1);
  expect(showsByGenres["action"].length).toStrictEqual(1);

  //Assert: the full content of a show
  expect(showsByGenres["thriller"][0]).toStrictEqual(mockedShows[0]);
});
