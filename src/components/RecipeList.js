import React from "react";
import RecipeCard from "./RecipeCard";
import "../styles/recipe-list.css";

const RecipeList = ({ recipes, toggleFavorite, favorites, addToGroceryList, loading, error }) => {
  return (
    <div className="recipe-list">
      {loading ? (
        <p>Loading recipes...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
            addToGroceryList={addToGroceryList} 
          />
        ))
      )}
    </div>
  );
};

export default RecipeList;