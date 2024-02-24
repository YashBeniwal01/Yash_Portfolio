import React, { useState } from "react";
import './Contact.css';

function Contact() {
  // State variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
       ...prevState,
      [name]: value
    }));
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // fetch API to send HTTP POST request to the specify url
      const response = await fetch("http://localhost:5000/api/contact", {
        // specify the post that is use for submitting the form
        method: "POST",
        //indicate that content beign sent to request body in the format of json
        headers: {
          "Content-Type": "application/json"
        },
        //convert the form data into json string
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Form submission was successful
        alert("Form submitted successfully!");
        // Reset the form data
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        // Form submission failed
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <h1>Contact us</h1>
      <div className="contact-box">
        <div className="left-contact-box">
          <h3>Location:</h3>
          <p>Jaipur, Rajasthan</p>
          <h3>Email:</h3>
          <p>beniwalyash35@gmail.com</p>
          <h3>Contact:</h3>
          <p>6378920482</p>
        </div>
        <div className="right-contact-box">
          <form onSubmit={handleSubmit}>
            <div className="inputRow">
              <input
                type="text"
                className="nameInput"
                placeholder="Your name"
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
              <input
                type="email"
                className="emailInput"
                placeholder="Your email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              className="subjectInput"
              placeholder="Subject"
              value={formData.subject}
              name="subject"
              onChange={handleChange}
            />
            <input
              type="text"
              className="messageInput"
              placeholder="Enter your message..."
              value={formData.message}
              name="message"
              onChange={handleChange}
            />
            <div className="send-btn">
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
