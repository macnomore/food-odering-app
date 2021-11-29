import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assets/masala.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input name="name" type="email" placeholder="Enter your email" />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="7"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
