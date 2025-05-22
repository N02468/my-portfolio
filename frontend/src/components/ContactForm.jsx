import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://my-portfolio-theta-neon-12.vercel.app/api/contact', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Failed to submit form');
    }
  };

  return (
    <div>
      <h1 style={{ paddingTop: '4rem', fontWeight: 'bolder' }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label style={{"color":"white","font-family":"Comic-Neue,cursive","font-weight":"bolder"}}>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      <div class="whatsapp-container">
            <a href="#" target="_blank" class="whatsapp-rounded-button">
              <i class="ri-whatsapp-fill"></i>
            </a>
          </div>
    </div>
  );
}

export default ContactForm;
