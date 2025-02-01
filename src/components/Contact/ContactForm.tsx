import React, { useState } from "react";
import "./ContactForm.css"; 
import { FormattedMessage } from "react-intl";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2><FormattedMessage id="contact1"/></h2>
        <p><FormattedMessage id="contact2"/></p>
        <div className="contact-info">
          <p>📞 +0123 4567 8910</p>
          <p>📧 <a href="mailto:hello@flowbase.com">hello@flowbase.com</a></p>
          <p>📍 102 Street 2714 Don</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="input-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="send-button"><FormattedMessage id="contact3"/></button>
      </form>
    </div>
  );
};

export default ContactForm;