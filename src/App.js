import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./components/Favorites";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFoundPage";
import ContactPage from "./components/ContactPage";
import "./style.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [groceryList, setGroceryList] = useState([]);

  const fetchRecipes = async (query) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    setRecipes(res.data.meals || []);
  };

  const toggleFavorite = (recipe) => {
    const updatedFavorites = favorites.some(
      (fav) => fav.idMeal === recipe.idMeal
    )
      ? favorites.filter((fav) => fav.idMeal !== recipe.idMeal)
      : [...favorites, recipe];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isInGroceryList = (recipe) => {
    return groceryList.find((item) => item.idMeal === recipe.idMeal);
  };

  const addToGroceryList = (recipe) => {
    const ingredients = Object.keys(recipe)
      .filter((key) => key.startsWith("strIngredient") && recipe[key])
      .map((key, index) => ({
        ingredient: recipe[key],
        measure: recipe[`strMeasure${key.slice(13)}`],
      }));

    setGroceryList((prevList) => [...prevList, ...ingredients]);
  };

  const removeFromGroceryList = (index) => {
    setGroceryList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const clearGroceryList = () => {
    setGroceryList([]);
  };
  //allah
  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={fetchRecipes} />
              <RecipeList
                recipes={recipes}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                addToGroceryList={addToGroceryList}
                removeFromGroceryList={removeFromGroceryList}
                isInGroceryList={isInGroceryList}
              />
            </>
          }
        />
        <Route
          path="/recipe/:id"
          element={<RecipeDetails addToGroceryList={addToGroceryList} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              addToGroceryList={addToGroceryList}
            />
          }
        />
        <Route
          path="/grocery-list"
          element={
            <GroceryList
              groceryList={groceryList}
              removeFromGroceryList={removeFromGroceryList}
              clearGroceryList={clearGroceryList}
            />
          }
        />
        {/* New route for Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer className="footer" />
    </Router>
  );
};

export default App;
