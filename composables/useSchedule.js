export default async () => {
  const { data } = await useFetch(
    `https://api.tvmaze.com/schedule/web?country=US&embed=show`
  );
  return data.value;
};
