import React, { useState } from "react";
import "./ContactForm.css"; 

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const ContactHeader = () => {
  return (
    <div className="contact-bg">
      <h3>Get in Touch with Us</h3>
      <h2>Contact Us</h2>
      <div className="line">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste
        facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis
        quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
      </p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div>
        <span>
          <i className="fas fa-mobile-alt"></i>
        </span>
        <span>Phone No.</span>
        <span className="text">1-2392-23928-2</span>
      </div>
      <div>
        <span>
          <i className="fas fa-envelope-open"></i>
        </span>
        <span>E-mail</span>
        <span className="text">mail@company.com</span>
      </div>
      <div>
        <span>
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <span>Address</span>
        <span className="text">2939 Patrick Street, Victoria TX, United States</span>
      </div>
      <div>
        <span>
          <i className="fas fa-clock"></i>
        </span>
        <span>Opening Hours</span>
        <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-form" >
      <form onSubmit={handleSubmit} >
     
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        
    
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
     
        <textarea
     
          placeholder="Message"
          className="form-control"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <input type="submit" className="send-btn" value="Send Message" />
      </form>

     
    </div>
  );
};

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
  
        aria-hidden="false"

      ></iframe>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="contact-footer">
      <h3>Follow Us</h3>
      <div className="social-links">
      <a href="#" className="">
        <FaFacebookF />
      </a>
      <a href="#" className="">
        <FaTwitter />
      </a>
      <a href="#" className="">
        <FaInstagram />
      </a>
      <a href="#" className="">
        <FaLinkedin />
      </a>
      <a href="#" className="">
        <FaYoutube />
      </a>
    </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="contact-section">
      <ContactHeader />
      <div className="contact-body">
        <ContactInfo />
        <ContactForm />
      </div>
      <Map />
      <Footer />
    </section>
  );
};

export default Contact;
