import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="major">Contact</h2>

      <div className="field half first">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="field half">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>

      <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
    </form>
  );
};

export default ContactForm;