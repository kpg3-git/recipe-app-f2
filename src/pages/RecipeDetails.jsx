import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMeal(res.data.meals[0]));
  }, [id]);

  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white">
      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-white-200 text-orange-500 border-2 border-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
      >
        ← Back
      </Link>

      <h1 className="text-orange-500 text-3xl font-bold mb-6">{meal.strMeal}</h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <img
          src={meal.strMealThumb}
          className="rounded-lg shadow hover:scale-105 transition"
        />

        <div className="border p-4 rounded shadow bg-white dark:bg-gray-800">
          <h2 className="text-orange-500 text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-white">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        <div className="border p-4 rounded shadow">
          <h2 className="text-orange-500 text-xl font-semibold mb-2">Category</h2>
          <p>{meal.strCategory}</p>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              className="inline-block mt-4 text-red-500 hover:underline dark:text-orange-500 underline dark:hover:text-white"
            >
              ▶ Watch Video
            </a>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-orange-500 text-2xl font-semibold mb-2 text-gray-700 dark:white leading-relaxed">Instructions</h2>
        <p className="text-gray-700 leading-relaxed dark:text-white">
          {meal.strInstructions}
        </p>
      </div>
      
    </div>
  );
}
