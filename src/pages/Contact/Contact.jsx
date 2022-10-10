import React, { useEffect } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

import FormSvg from "../../images/formsvg1.svg";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="contact" className="contact_container">
      <div className="header_text">
        <h1>Contact Me</h1>
      </div>
      <div className="contact">
        <div className="beautify_form" data-aos="flip-left">
          <img src={FormSvg} alt="Form_Image" />
        </div>

        <form action="" data-aos="flip-right">
          <div className="form_group">
            <input type="name" placeholder="Name" required />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form_group">
            <input type="number" placeholder="Phone(Optional)" />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="form_group">
            <input type="email" placeholder="Email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="message">
            <textarea placeholder="Enter Your Message Here" required></textarea>
            <label htmlFor="message">Enter Your Message Here</label>
          </div>

          <div className="form_group">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
