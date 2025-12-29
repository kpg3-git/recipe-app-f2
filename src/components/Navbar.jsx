import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar({
  search,
  setSearch,
  filter,
  setFilter,
  onSearch,
  onApply
}) {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleSearchClick = () => {
    if (location.pathname !== "/") {
      alert("Go Home to search for recipes");
      return;
    }
    onSearch();
  };

  const handleApplyClick = () => {
    if (location.pathname !== "/") {
      alert("Go Home to search for recipes");
      return;
    }
    onApply();
  };

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-orange-500">
          🍽 Recipe App
        </h1>

        {/* Search Section */}
        <div className="flex flex-wrap gap-2 md:ml-auto">
          <input
            type="text"
            placeholder="Search recipe..."
            className="border p-2 w-full sm:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={handleSearchClick}
            className="bg-orange-500 text-white px-4 py-2 rounded
                       hover:bg-white hover:text-orange-500 hover:border border-orange-500 transition"
          >
            Search
          </button>

          <select
            className="border p-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="ingredient">Ingredients</option>
            <option value="category">Category</option>
            <option value="meal">Meal Type</option>
          </select>

          <button
            onClick={handleApplyClick}
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded
                       hover:bg-orange-500 hover:text-white transition"
          >
            Apply
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-2 rounded border-orange-500
                       hover:bg-orange-500 hover:text-white
                       dark:text-white transition"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex gap-4 md:ml-auto">
          <Link to="/" className="font-semibold hover:text-orange-500 dark:text-white">
            Home 🏠
          </Link>
          <Link to="/help" className="font-semibold hover:text-orange-500 dark:text-white">
            Help ❓
          </Link>
          <Link to="/favourites" className="font-semibold hover:text-orange-500 dark:text-white">
            Favourites ❤️
          </Link>
        </div>

      </div>
    </div>
  );
}
