import React, { useEffect } from "react";
import "./project.css";
import Aos from "aos";
import "aos/dist/aos.css";

import SushiProject from "../../images/sushi-wadashi.jpg";
import KellynCode from "../../images/kellyncode.jpg";
import OrieOba from "../../images/portfolio1.1.png";
import EnuguWeb from "../../images/enugutechhub.png";
import Fricol from "../../images/banking-system2.png";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="project" className="project_page">
      <div className="header_text">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="projects">
        <div className="project" data-aos="flip-right">
          <div className="project_img">
            <img src={OrieOba} alt="Project img" />
            <h5>Ecommerce website</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/orie-oba-online"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="https//orieoba.online" rel="noreferrer">
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="zoom-in">
          <div className="project_img">
            <img src={KellynCode} alt="Project img" />
            <h5>My first portfolio website</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/portfolio-website"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://kellyncodes.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={SushiProject} alt="Project img" />
            <h5>Bussiness Website</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/shushi"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://kellyncodes.sushi.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={EnuguWeb} alt="Project img" />
            <h5>Digital Training Website</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/esthub"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://esthub.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={Fricol} alt="Project img" />
            <h5>Banking Website With PHP</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/fricol"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://fricol.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="flip-left">
          <div className="project_img">
            <img src={SushiProject} alt="Project img" />
            <h5>Push Notification</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/browser_notification"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://checkscore.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-down">
          <div className="project_img">
            <img src={SushiProject} alt="Project img" />
            <h5>Weather App</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://weather-app.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={SushiProject} alt="Project img" />
            <h5>Todo List</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/prokelly/todo-list"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://todo-list.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Vicit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={SushiProject} alt="Project img" />
            <h5>Fetch And Display Github Users Info</h5>
          </div>

          <div className="button">
            <a href="https://github.com/prokelly/search_githubUsers_by_username">
              Github
            </a>
            <a
              href="https://gitusers.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
