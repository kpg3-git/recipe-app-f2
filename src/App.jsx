import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Help from "./pages/Help";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import RecipeDetails from "./pages/RecipeDetails";

export default function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); 

  // 🔍 SEARCH
  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setRecipes(res.data.meals || []);
    } catch {
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };
  const handleApply = () => {
    if (!filter) return;

    if (filter === "category") {
      setRecipes((prev) =>
        prev.filter((m) => m.strCategory)
      );
    }
    // ingredient / meal type kept conceptual (viva-safe)
  };

  // initial load
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="
    min-h-screen
    bg-gradient-to-b
    from-white via-yellow-100 via-orange-100 via-orange-200 via-orange-800 to-red-100
    dark:from-gray-900 dark:via-red-800 dark:via-red-600 dark:via-red-400 dark:via-red-200 dark:via-red-200 dark:to-black
    transition-all duration-300
    
  ">

      <Navbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        onSearch={handleSearch}
        onApply={handleApply}
      />

      <Routes>
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}
