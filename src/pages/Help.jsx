import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        How to Use Recipe App 🍽
      </h1>

      <ul className="space-y-4 text-gray-700  dark:text-white">
        <li>
          🔍 <b>Search:</b> Type a recipe name (eg: chicken, pasta) and click
          <span className="font-semibold"> Search</span>.
        </li>

        <li>
          🎯 <b>Filter:</b> Select a filter option (All / Ingredient eg.Pepper / Category eg.Vegan / Meal Type eg.Mandi)..
          type the value in search box, then click
          <span className="font-semibold"> Apply and Search buttons</span>.
        </li>

        <li>
          ❤️ <b>Favourites:</b> Click the white heart 🤍 to save a recipe.
          It turns red ❤️ and appears in the Favourites page.
        </li>

        <li>
          📄 <b>Recipe Details:</b> Click any recipe card to view full details,
          ingredients, instructions, and video.
        </li>

        <li>
          🔙 <b>Navigation:</b> Use Home or Back button to return anytime.
        </li>
      </ul>

      <Link
        to="/"
        className="inline-block mt-8 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded
        hover:bg-orange-500 hover:text-white transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
