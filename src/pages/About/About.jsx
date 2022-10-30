import React, { useEffect } from "react";
import Resume from "../../images/resume7.jpg";
import Cmd from "../../images/cmd.png";
import Html from "../../images/html.png";
import JavaScript from "../../images/javaScript.png";
import GithubImg from "../../images/github.png";
import Css from "../../images/css.png";
import ReactImg from "../../images/react.jpg";
import Node from "../../images/node.png";
import NodeExpress from "../../images/expressjs.png";
import Bootstrap from "../../images/bootstrap.png";
import Php from "../../images/php-mysql.png";

import ProfileImg from "../../images/headerpicfb-removebg-preview.png";

import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about" className="about_container">
      <div className="header_text">
        <h1>About</h1>
      </div>
      <div className="about">
        <div className="resume">
          <div id="container_main">
            <div id="wrapper_hero" className="section-page">
              <img id="profile_pic" src={ProfileImg} alt="profile-pics" />

              <div>
                <h2 id="username">Kelechi Amos</h2>
                <p id="bio">Software Developer.</p>
                <p>Kellyncodes@gmail.com</p>
              </div>
            </div>

            <section class="section_page">
              <div id="socials_list">
                <a
                  href="https://github.com/prokelly"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https:/twitter.com/kellyncode"
                  rel="noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  href="https://facebook.com/kellyncodes"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/kellyncodes/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a
                  href="https://kellncodes.netlify.app"
                  rel="noreferrer"
                  target="_blank"
                >
                  Website
                </a>
                <a href={Resume} download="" rel="noreferrer" target="_blank">
                  Dowload Resume
                </a>
              </div>
            </section>

            <section className="section_page">
              <h2>Skills And Qualificaiton</h2>
              <ul id="qualification_list">
                <li>Expert Frontend Developer</li>
                <li>Professional instrumentalist</li>
                <li>Accurate and High speed typing Skill.</li>
              </ul>
            </section>

            <section className="section_page">
              <h2>Tech Stack</h2>

              <div id="wrapper_techstack_items">
                <div className="card_techstack">
                  <span>JavaScript, Html, Css, Tailwind, Bootstrap React,</span>
                </div>

                <div className="card_techstack">
                  <span>Node Js, Express, Php/Laravel, C#.</span>
                </div>

                <div className="card_techstack">
                  <span>MSQl, MONGO DB</span>
                </div>
              </div>
            </section>

            <div id="work_history_wrapper" className="section_page">
              <h2>Work History</h2>

              <div className="line_break"></div>

              <div className="card_work_history">
                <strong>
                  DEVELOPED AN ECOMMERCE WEBSITE FOR ENUGU TECH HUB
                </strong>
                <p>22/09/2022 - Present</p>
                <h5>Built with Php, JavaScript, Html5, Css3</h5>

                <ul>
                  <li>An ecom website for orie oba market</li>
                  <li>Increased income return for the state.</li>
                  <li>Made purchase easy for the whole customers</li>
                </ul>
              </div>

              <div className="line_break"></div>

              <div className="card_work_history">
                <strong>Created a Blogging site</strong>
                <p>20/5/2022 - Present</p>
                <h5>Built with NextJs, Css3, ExpressJs</h5>

                <ul>
                  <li>Api Authentication with ExpressJs</li>
                  <li>Authentication with Next-Auth and JWT</li>
                  <li>Post, Like, Comment, and Share.</li>
                </ul>
              </div>

              <div className="line_break"></div>

              <div className="card_work_history">
                <strong>Online Trading</strong>
                <p>22/09/2022 - Present</p>
                <h5>
                  Online Trading Platform | Php/Laravel, JavaScript, Bootstrap,
                  Css3, Html5, Sccs,
                </h5>

                <ul>
                  <li>Authentication with laravel meadleware</li>
                  <li>
                    P2P trading, Bitcoin, Ethereum..., payment method, and many
                    more...
                  </li>
                  <li>Referalls, Etc...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="skills_container">
          <h1>LANGUAGES, TOOLS AND FRAMEWORKS I USE</h1>
          <div className="sub_container">
            <div className="skills" data-aos="flip-left">
              <div className="skill_img">
                <img src={ReactImg} alt="React" />
                <h4>React: JavaScript Framework</h4>
              </div>
            </div>

            <div className="skills" data-aos="flip-left">
              <div className="skill_img">
                <img src={NodeExpress} alt="Node Express" />
                <h4>Node JS Library</h4>
              </div>
            </div>

            <div className="skills" data-aos="slide-up">
              <div className="skill_img">
                <img src={JavaScript} alt="JavaScript" />
                <h4>JavaScripT</h4>
              </div>
            </div>

            <div className="skills" data-aos="fade-down-left">
              <div className="skill_img">
                <img src={Css} alt="Css" />
                <h4>Cascading Style Sheet</h4>
              </div>
            </div>

            <div className="skills" data-aos="zoom-in">
              <div className="skill_img">
                <img src={Html} alt="Html" />
                <h4>Hyper Text Markup Language</h4>
              </div>
            </div>

            <div className="skills" data-aos="flip-right">
              <div className="skill_img">
                <img src={GithubImg} alt="Github" />
                <h4>Version Control System</h4>
              </div>
            </div>

            <div className="skills" data-aos="fade-down-right">
              <div className="skill_img">
                <img src={Cmd} alt="Command Prompt" />
                <h4>Command Prompt</h4>
              </div>
            </div>

            <div className="skills" data-aos="fade-left">
              <div className="skill_img">
                <img src={Node} alt="Node Js" />
                <h4>JavaScript Library For Backend</h4>
              </div>
            </div>

            <div className="skills" data-aos="zoom-in">
              <div className="skill_img">
                <img src={Php} alt="php" />
                <h4>Php</h4>
              </div>
            </div>

            <div className="skills" data-aos="zoom-in">
              <div className="skill_img">
                <img src={Php} alt="php" />
                <h4>Mysql Database</h4>
              </div>
            </div>

            <div className="skills" data-aos="zoom-in">
              <div className="skill_img">
                <img src={Php} alt="php" />
                <h4>MongoDB</h4>
              </div>
            </div>

            <div className="skills" data-aos="zoom-in">
              <div className="skill_img">
                <img src={Bootstrap} alt="Bootstrap" />
                <h4>BOOTSTRAP</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
