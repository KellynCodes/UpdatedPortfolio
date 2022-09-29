import React, { useEffect } from "react";
import headerImg from "../../images/react.jpg";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaDesktop, FaGithub, FaHammer, FaPen } from "react-icons/fa";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="home" className="home">
      <div data-aos="flip-right" class="home_left">
        <div className="about">
          <div className="me">
            <h1>Hey!</h1>
            <b>I am KellY</b>
          </div>

          <div className="whom_i_am">
            <div className="static_text">I'm A</div>
            <ul className="dynamic_text">
              <li>
                <span>Developer</span>
              </li>
              <li>
                <span>Designer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </div>

          <div className="capacity">
            <h5>
              I am proud of my work and ability. I love to design and develop
              user friendly Web Apps.
            </h5>
          </div>

          <div className="my_work">
            <ul>
              <h3>The Kind of works i do</h3>
              <div className="icon_container">
                <div className="icons">
                  <FaPen />
                </div>
                <p>Web Design</p>
              </div>
              <div className="icon_container">
                <div className="icons">
                  <FaDesktop />
                </div>
                <p>Web Development</p>
              </div>

              <div className="icon_container">
                <div className="icons">
                  <FaHammer />
                </div>
                <p>Web Maintainance</p>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="flip-right" className="home_right">
        <img src={headerImg} alt="profile image" />
      </div>
    </div>
  );
}

export default Home;
