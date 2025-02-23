import React, { useState } from "react";
import "../styles/footer.css";

const Footer = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setFeedback(e.target.value)
      alert("thank u for ur feedback => '"+feedback+"'");
      
      setFeedback(""); 
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>
            <u>About Us</u>
          </h3>
          <p>
            ila makentysh kat3ref tayeb awla kat3ref o bghity t3lm 7wayej jdad fa marhba bik
          </p>
        </div>
        <div className="footer-section">
          <h3>
            <u>Quick Links</u>
          </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
            <li>
              <a href="/grocery-list">Grocery List</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>
            <u>Follow Us</u>
          </h3>
          <div className="social-links">
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/Pa0xi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h3>Your Feedback</h3>
          <form onSubmit={handleFeedbackSubmit} className="feedback-form">
            <input
              type="text"
              placeholder="Share your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="feedback-input"
            />
            <button type="submit" className="feedback-submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;