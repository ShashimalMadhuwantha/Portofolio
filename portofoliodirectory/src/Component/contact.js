import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(
      'service_jgp3brb', // Your EmailJS service ID
      'template_zgyb22h', // Your EmailJS template ID
      e.target, // The form data
      'RJX_IUdXRSySIqjhl' // Your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text); // Success message
      alert("Your message has been sent successfully!");
    })
    .catch((error) => {
      console.error(error.text); // Error message
      alert("There was an error sending your message.");
    });

    // Optionally reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-container">
      <div id="contact-left" className="contact-left">
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me via the form or social media!</p>
        </div>

        {/* Social media icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shashimal-madhuwantha-82b74431b/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/ShashimalMadhuwantha" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/_shashimal/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/0722374804" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:shashimalmadhuwantha12@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div id="contact-right" className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Send me a Message</h3>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>

          <input type="submit" value="Send Message" />
        </form>
      </div>

      {/* Animated Item */}
      <div className="animated-item">
        <i className="fas fa-comments"></i> {/* Use an icon related to messaging or contact */}
      </div>
    </section>
  );
};

export default Contact;
