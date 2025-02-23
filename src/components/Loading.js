import React from "react";
import "../styles/loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading delicious recipes... 🍳</p>
    </div>
  );
};

export default Loading;