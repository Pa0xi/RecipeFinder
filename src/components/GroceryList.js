import React from "react";
import "../styles/grocery-list.css";

const GroceryList = ({ groceryList, removeFromGroceryList, clearGroceryList }) => {
  return (
    <div className="grocery-list-container">
      <h2>Your Grocery List 🛒</h2>
      {groceryList.length === 0 ? (
        <p>Your grocery list is empty. Add some recipes!</p>
      ) : (
        <>
          <button onClick={clearGroceryList} className="clear-btn">
            🧹 Clear Grocery List
          </button>
          <ul className="grocery-list">
            {groceryList.map((item, index) => (
              <li key={index} className="grocery-item">
                <p className="alo">
                  {item.ingredient} - {item.measure}
                </p>
                <button
                  onClick={() => removeFromGroceryList(index)}
                  className="remove-btn"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default GroceryList;