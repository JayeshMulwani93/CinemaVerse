export async function getMovies(searchKey) {
  const omdbMoviesUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_SECRET_KEY}&s=${searchKey}`;

  const response = await fetch(omdbMoviesUrl);

  if (response.ok) {
    const moviesResponse = await response.json();
    if (moviesResponse.Response === "True") {
      return moviesResponse.Search;
    }
  } else {
    throw new Error("Could not fetch Movies");
  }

  return [];
}
