export const getFavourites = () =>
  JSON.parse(localStorage.getItem("favourites")) || [];

export const saveFavourites = (data) =>
  localStorage.setItem("favourites", JSON.stringify(data));
