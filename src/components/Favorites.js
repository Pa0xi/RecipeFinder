import React from "react";
import RecipeList from "./RecipeList";
import "../styles/favorites.css";

const Favorites = ({ favorites, toggleFavorite, addToGroceryList }) => {
  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Your Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <RecipeList
          recipes={favorites}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          addToGroceryList={addToGroceryList} 
        />
      ) : (
        <p className="no-favorites">No favorites yet. Start adding some! ❤️</p>
      )}
    </div>
  );
};

export default Favorites;