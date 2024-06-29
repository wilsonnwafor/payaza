import { useState } from "react";
import style from "./Contact.module.css"

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mdoqrron', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };
  return(
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor="name" className={formData.name ? style.filled : ''}>Full-name</label>
        <input type="name" name="name" value={formData.name} onChange={handleChange} required/>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="email" className={formData.email ? style.filled : ''}>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="subject" className={formData.subject ? style.filled : ''}>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required/>
      </div>
      <div className={style.message}>
        <textarea name="" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <div className={style.btn}>
        <button type="submit">Send Message</button>
      </div>
    </form>
  )
}

export default Form;