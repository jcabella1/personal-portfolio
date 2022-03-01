import "./contact.scss";
import { useState } from "react";


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  
  function handleSubmit (e) {
    e.preventDefault();
    setSubmitted(true);
  }
    return(
        <div className="contact" id="contact">
            <h1>Contact</h1>
            {submitted && <div class='success-message'>Thanks! I'll get back to you ASAP.</div>}
            <form
            name="contact-form"
            method="POST"
            action="/"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="text" placeholder="Enter your name" name="name" />
              <input type="text" placeholder="Enter your email" name="email" />
              <textarea placeholder="Type your message here" name="message" />
              <button type="submit">Submit</button>
            </form>
        </div>
    );
}