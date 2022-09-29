import React from "react";
import "./nav.css";

function Nav() {
  return (
    <>
      <header className="nav_container">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <h1>K3llYnCodE</h1>
            </a>
          </div>

          <div className="navlinks">
            <ul className="links">
              <li className="">
                <a href="#">Home</a>
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
              <a href="">Hire Me</a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
