import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaPhone,
  FaPaperPlane,
  FaWhatsapp,
  FaDiscord,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [scrollTop, setScrollTop] = useState(true);

  const scrollUp = () => {
    window.scrollY > 1000 ? setScrollTop(true) : setScrollTop(false);
  };
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="about_me">
          <h4>About Me</h4>
          <p>
            I am kelechi Amos Omeh from Nsukka, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem aliquam labore possimus,
            repudiandae aliquid magnam, voluptates amet quo sapiente culpa,
            ratione autem quis? Neque iure, veritatis vitae doloremque sit
          </p>
        </div>

        <div className="socials">
          <h4>Follow Me On</h4>
          <ul>
            <a href="https://fb.com/kellyncodes" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/kellyncode" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/kellyncode" target="_blank">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/Kellyn-Codes-842393213"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://discord.com/@kellyncodes#8004" target="_blank">
              <FaDiscord />
            </a>
            <a
              href="https://stackoverflow.com/users/19514653/kellyncodes"
              target="_blank"
            >
              <FaStackOverflow />
            </a>
            <a href="https://github.com/prokelly" target="_blank">
              <FaGithub />
            </a>
          </ul>
        </div>

        <div className="direct_message">
          <h4>Direct Message</h4>
          <ul>
            <a href="mailto:kellyncodes@gmail.com" target="_blank">
              <FaPaperPlane />
            </a>
            <a href="tel:+2349157060998" target="_blank">
              <FaPhone />
            </a>
            <a href="https://wa.me/+2349157060998" target="_blank">
              <FaWhatsapp />
            </a>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>
          CopyRight &copy;
          <b className="footer_year"> {new Date().getFullYear()} </b> All right
          Reserved Made by <b className="footer_year">Kellyncodes</b>
        </p>
      </div>

      <a
        onScroll={scrollUp}
        href="#home"
        className={scrollTop ? "open_scroll_up" : "scroll_up"}
      >
        <FaRegArrowAltCircleUp style={{ fontSize: "1.5rem" }} />
      </a>
    </div>
  );
}

export default Footer;
