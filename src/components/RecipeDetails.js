import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading"; 
import "../styles/recipe-details.css";

const RecipeDetails = ({ addToGroceryList }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(res.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return <Loading />
  }

  if (!recipe) {
    return <p className="error-text">Recipe not found. Please try again.</p>;
  }

  return (
    <div className="recipe-container">
      <div className="recipe-details">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
        <h2 className="recipe-title">{recipe.strMeal}</h2>
        <div className="button-container">
          <button
            onClick={() => addToGroceryList(recipe)}
            className="mouaad"
          >
            🛒 Add to Grocery List
          </button>
        </div>
        <p className="recipe-meta">
          <span className="meta-item">Category: {recipe.strCategory}</span>
          <span className="meta-item">Area: {recipe.strArea}</span>
        </p>
        <div className="recipe-section">
          <h3 className="section-title">Ingredients</h3>
          <ul className="ingredients-list">
            {Object.keys(recipe)
              .filter((key) => key.startsWith("strIngredient") && recipe[key])
              .map((key, index) => (
                <li key={index}>
                  {recipe[key]} - {recipe[`strMeasure${key.slice(13)}`]}
                </li>
              ))}
          </ul>
        </div>
        <div className="recipe-section">
          <h3 className="section-title">Instructions</h3>
          <p className="recipe-instructions">{recipe.strInstructions}</p>
        </div>
        <div className="button-container">
        <a
          href={recipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="recipe-link"
        >
          Watch on YouTube 📺
        </a></div>
      </div>
    </div>
  );
};

export default RecipeDetails;