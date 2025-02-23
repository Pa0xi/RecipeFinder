import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css'; 

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-message">Oops! The page you're looking for cannot be found.</p>
      <Link to="/" className="not-found-link">Go back to homepage</Link>
    </div>
  );
};

export default NotFoundPage;
