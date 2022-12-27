import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_np2ws7t",
        "template_b7a6n3x",
        form.current,
        "mV2o8vaVbtpd3re6T"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactPage">
      <div className="ContactPicture"></div>
      <div className="ContactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" />
          <label>Mobile</label>
          <input type="tel" name="user_mobile" placeholder="Mobile" />
          <label>Message</label>
          <textarea name="message" placeholder="message" />

          <button type="submit" className="ButtonSubmit">
            {" "}
            Submit
          </button>
          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
