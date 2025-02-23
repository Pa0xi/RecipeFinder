import React from "react";
import { Link } from "react-router-dom";
import "../styles/recipe-card.css";

const RecipeCard = ({ recipe, toggleFavorite, isFavorite, addToGroceryList, removeFromGroceryList, ishere}) => {
  const handleGroceryListClick = () => {
    if (ishere) {
      removeFromGroceryList(recipe);
    } else {
      addToGroceryList(recipe); 
    }
  };

  return (
   <div className="recipe-card" style={{ backgroundImage: `url(${recipe.strMealThumb})` }}>
  <div className="background-blur"></div>
  <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
  <h2 className="recipe-title">{recipe.strMeal}</h2>
  <p className="recipe-category">{recipe.strCategory}</p>
  <div className="button-container">
    <Link to={`/recipe/${recipe.idMeal}`} className="view-recipe">
      View Recipe
    </Link>
    <button onClick={() => toggleFavorite(recipe)} className={`favorite-btn ${isFavorite ? "remove-favorite" : "add-favorite"}`}>
      {isFavorite ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
    </button>
    <button onClick={handleGroceryListClick} className={`grocery-btn ${ishere ? "remove-grocery" : "add-grocery"}`}>
      {ishere ? "🗑️ Remove from Grocery List" : "🛒 Add to Grocery List"}
    </button>
  </div>
</div>

  );
};

export default RecipeCard;