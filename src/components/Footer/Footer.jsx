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
  FaFileVideo,
  FaRegAngry,
} from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [scrollTop, setScrollTop] = useState(true);

  const scrollUp = () => {
    if (window.scrollY > 100) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="about_me">
          <h4>About Me</h4>
          <p>
            Hi there, I am Kelechi Amos Omeh, a passionate web developer with 3+
            Years of experience. Choosing a career part in Tech was my greatest
            archievment because when i was a kid i was so much interested in
            tech.
          </p>
        </div>

        <div className="socials">
          <h4>Follow Me On</h4>
          <ul>
            <a
              href="https://fb.com/kellyncodes"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/kellyncode"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/kellyncode"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/KellynCodes"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.com/@kellyncodes#8004"
              rel="noreferrer"
              target="_blank"
            >
              <FaDiscord />
            </a>
            <a
              href="https://stackoverflow.com/users/19514653/kellyncodes"
              target="_blank"
              rel="noreferrer"
            >
              <FaStackOverflow />
            </a>
            <a
              href="https://github.com/prokelly"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </ul>
        </div>

        <div className="direct_message">
          <h4>Hire Me</h4>
          <ul>
            <ul>
              <li>
                <a href="https://fiver.com/kellyncodes">
                  Hire Me On Fiver <FaRegAngry style={{ fontSize: 30 }} />
                </a>
              </li>
              <li>
                <a href="https://fiver.com/kellyncodes">
                  Hire Me On freelancer.com
                </a>
              </li>
              <li>
                <a href="https://fiver.com/kellyncodes">Hire Me On Upwork</a>
              </li>
            </ul>
            <h4>Direct Message</h4>
            <a
              href="mailto:kellyncodes@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <FaPaperPlane />
            </a>
            <a href="tel:+2349157060998" rel="noreferrer" target="_blank">
              <FaPhone />
            </a>
            <a
              href="https://wa.me/+2349157060998"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>
          CopyRight &copy;
          <b className="footer_year"> {new Date().getFullYear()} </b> All right
          Reserved, Made by <b className="footer_year">Kellyncodes</b>
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
