import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getFavourites, saveFavourites } from "../utils/storage";

export default function Home({ recipes, loading }) {

  const [favs, setFavs] = useState(getFavourites());

  const toggleFav = (meal) => {
    const updated = favs.some(f => f.idMeal === meal.idMeal)
      ? favs.filter(f => f.idMeal !== meal.idMeal)
      : [...favs, meal];

    setFavs(updated);
    saveFavourites(updated);
  };

  return (
    <>
      <div className="bg-orange-500 p-6 text-center">
        <h2 className="text-white text-2xl font-bold">About This App 🍲</h2>
        <p className="text-black-100 hover:font-bold transition-all duration-200 max-w-xl mx-auto">
          Love cooking or just hungry for ideas? This app helps you explore delicious recipes from around the world. Search meals, filter by your preferences, and save your favourites—all in one place.
        </p>
      </div>

      {loading && (
        <p className="text-center mt-10 text-xl font-semibold">
          Loading recipes... 🍳
        </p>
      )}
      {!loading && (
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recipes.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                meal={meal}
                isFav={favs.some(f => f.idMeal === meal.idMeal)}
                toggleFav={toggleFav}
              />
            ))}
          </div>
        )
      }
    </>
  );
}
