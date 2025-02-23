import React, { useState } from 'react';
import "../styles/contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }
    const response = await fetch("https://formspree.io/f/mrbevpdz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
  
    if (response.ok) {
      alert("Shukran! 3la ra2yek.");
      setFormData({ name: "", email: "", message: "" }); 
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="contact-page">
      <main className="contact-main">
        <section className="contact-form-section">
          <h1 className="contact-title">Contact Us</h1>
          <form className="contact-form" onSubmit={handleSubmit}   action="https://formspree.io/f/mrbevpdz"
  method="POST">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input 
                type="name" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your name" 
                required 
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your email" 
                required 
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                placeholder="Your message" 
                required
                className="form-textarea"
              />
            </div>

            <button type="submit" className="form-button">Send Message</button>
          </form>
        </section>

        <section className="contact-info-section">
          <h2 className="contact-info-title">Contact Information</h2>
          <div className="contact-info">
            <p className="contact-info-item"><strong>Phone:</strong> +212605951040</p>
            <p className="contact-info-item"><strong>Email:</strong> magrimouaad2005@gmail.com</p>
            <p className="contact-info-item"><strong>Address:</strong> Hay El Falah, rue 13, N° 18, Casablanca, Morocco</p>
          </div>

          <div className="contact-map">
            <h3 className="map-title">Find Us Here</h3>
            <iframe 
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1194.5665875258092!2d-7.549933902810425!3d33.56080188435362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1740199021917!5m2!1sfr!2sma"
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              title="Map"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
