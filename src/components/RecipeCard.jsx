import { Link } from "react-router-dom";

export default function RecipeCard({ meal, isFav, toggleFav }) {
  return (
    <div className="
      border-2 border-transparent rounded-lg overflow-hidden
      shadow hover:shadow-xl transition-all duration-300
      bg-white dark:bg-gray-100
      text-black dark:text-gray-700
      hover:border-orange-500 dark:hover:border-orange-400
    ">

      <Link to={`/recipe/${meal.idMeal}`}>
        <img
          loading="lazy"
          src={meal.strMealThumb}
          className="w-full h-48 object-cover hover:scale-105 transition duration-300"
        />
      </Link>

      <div className="p-3">
        <h3 className="font-semibold">{meal.strMeal}</h3>
        <p className="text-sm text-gray-500">{meal.strCategory}</p>

        <button
          onClick={() => toggleFav(meal)}
          className={`text-2xl mt-2 transition ${
            isFav ? "text-red-500" : "text-gray-400 hover:text-red-400"
          }`}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
