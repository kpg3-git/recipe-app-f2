import RecipeCard from "../components/RecipeCard";
import { getFavourites, saveFavourites } from "../utils/storage";
import { useState } from "react";

export default function Favourites() {
  const [favs, setFavs] = useState(getFavourites());

  const toggleFav = (meal) => {
    const updated = favs.filter((f) => f.idMeal !== meal.idMeal);
    setFavs(updated);
    saveFavourites(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white"> Add your Favourite❤️ recipes to watch later!!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {favs.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
            isFav={true}
            toggleFav={toggleFav}
          />
        ))}
      </div>
    </div>
  );
}
