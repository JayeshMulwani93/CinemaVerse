const firebaseDomain = process.env.REACT_APP_FIREBASE_DATABASE_URL + "/user-watchlist.json";

export async function addToWatchListApi(requestData) {
  const userId = requestData.userId;
  const movie = requestData.movie;
  const currentWatchList = requestData.watchList;

  const filteredWatchList = currentWatchList.filter(
    (favMovie) => movie.imdbID === favMovie.imdbID
  );

  if (filteredWatchList && filteredWatchList.length > 0) {
    console.log("Already exists in favorites");
  } else {
    const updatedWatchList = [...currentWatchList, movie];
    return saveWatchList(userId, updatedWatchList);
  }

  return currentWatchList;
}

export async function removeFromWatchListApi(requestData) {
  const userId = requestData.userId;
  const movie = requestData.movie;
  const currentWatchList = requestData.watchList;

  const filteredWatchList = currentWatchList.filter(
    (favMovie) => movie.imdbID !== favMovie.imdbID
  );

  return saveWatchList(userId, filteredWatchList);
}

export async function getUserWatchListApi(userId) {
  const response = await fetch(firebaseDomain, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Could not fetch watchList");
  }

  const jsonResponse = await response.json();
  if (!jsonResponse || jsonResponse === null) {
    return [];
  }
  return jsonResponse[userId];
}

async function saveWatchList(userId, updatedWatchList) {
  const response = await fetch(firebaseDomain, {
    method: "PUT",
    body: JSON.stringify({
      [userId]: updatedWatchList,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Could not fetch watchList");
  } else {
    const responseData = await response.json();
    if (!responseData || responseData === null) {
      return [];
    }
    return responseData[userId];
  }
}
