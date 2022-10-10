import React from "react";
import "./nav.css";

function Nav() {
  return (
    <>
      <header className="nav_container">
        <div className="navbar">
          <div className="logo">
            <h1>K3llYnCodE</h1>
          </div>

          <div className="navlinks">
            <ul className="links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <ul className="right_links">
              <a
                href="https://www.upwork.com/freelancers/~01edd830bade39ada0"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
