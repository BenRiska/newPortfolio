import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Resume from "./resume.pdf";
import mod5 from "./logos/mod5ss.png";
import mod2 from "./logos/mod3ss.png";
import mod3 from "./logos/mod2ss.png";
import mod1 from "./logos/mod1ss.png";
const logoSize = () => {
  if (window.screen.width > 1200) {
    return "fa-5x";
  } else if (window.screen.width > 1000) {
    return "fa-4x";
  } else if (window.screen.width > 800) {
    return "fa-3x";
  } else if (window.screen.width > 400) {
    return "fa-2x";
  } else {
    return "fa-1x";
  }
};

function Projects() {
  return (
    <div className="projects">
      <div className="wrapper">
        <div className="showcase">
          <nav>
            <Link to="./">
              <h3>Ben Taylor</h3>
            </Link>
            <ul>
              <li>LinkedIn</li>
              <li>Github</li>
            </ul>
            <a className="download-btn" href={Resume} download>
              Download Resume
            </a>
          </nav>
          <div className="show-head">
            <h1>Project Showcase</h1>
            <p>
              <span className="p-color">---</span> A collection of frontend web
              design, backend engineering, fullstack web apps and CLI
              mini-games.
            </p>
          </div>
        </div>
        <h3 className="lang-strip-head">
          Producing high quality <span className="p-color">Applications</span>{" "}
          with software such as
        </h3>
        <div className="language-strip">
          <i className={`fab fa-html5 ${logoSize()}`}></i>
          <i className={`fab fa-css3-alt ${logoSize()}`}></i>
          <i className={`fab fa-js-square ${logoSize()}`}></i>
          <i className={`fab fa-react ${logoSize()}`}></i>
          <i className={`fab fa-bootstrap ${logoSize()}`}></i>
          <i className={`fas fa-terminal ${logoSize()}`}></i>
          <i className={`fab fa-git ${logoSize()}`}></i>
        </div>
      </div>
      <div className="project-grid">
        <div className="grid-item">
          <div className="grid-item-content">
            <h1>
              <span className="p-color">Link</span> -
              <span className="grid-title-adj"> Social Media App</span>
            </h1>
            <p>
              A Full Stack Social Media App, allowing users to swipe through
              potential new friends on a tinder inspired interface. The frontend
              was designed with React, the styling is all handmade CSS and the
              backend database is maintained with Ruby and SQL-Lite.
            </p>
            <div className="btns">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                href="https://github.com/BenRiska/mod5frontend"
              >
                Frontend Repo
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                href="https://github.com/BenRiska/mod5Backend"
              >
                Backend Repo
              </a>
            </div>
          </div>
          <img src={mod5} alt="social media app called link"></img>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <h1>
              <span className="p-color">Screams on Road 7</span> -
              <span className="grid-title-adj"> CLI Game</span>
            </h1>
            <p>
              A short RPG title that follows our main character as he
              investigates an abandoned house after hearing a peculiar scream.
              Built with object oriented Ruby and playable directly through the
              computer terminal.
            </p>
            <div className="btns">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                href="https://github.com/BenRiska/ruby-project-guidelines-london-web-012720"
              >
                Github Repo
              </a>
            </div>
          </div>
          <img src={mod1} alt="social media app called link"></img>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <h1>
              <span className="p-color">Khao</span> -
              <span className="grid-title-adj"> Restaurant Managing App</span>
            </h1>
            <p>
              A Full Stack Web App I built for a friends Thai food company.
              There are two seperate interfaces. The first allows customers to
              view the current company schedule and request a booking, the
              second is an exclusive portal for the owner to view and manage
              those bookings. Built with Ruby on Rails using the MVC format.
            </p>
            <div className="btns">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                href="https://github.com/teatauri/gk_booking"
              >
                Github Repo
              </a>
            </div>
          </div>
          <img src={mod3} alt="social media app called link"></img>
        </div>
        <div className="grid-item">
          <div className="grid-item-content">
            <h1>
              <span className="p-color">Covid-19 Tracker</span> -
              <span className="grid-title-adj"> Website</span>
            </h1>
            <p>
              A frontend web app, built with vanilla javascript. The app
              utilises 2 seperate API's to accurately represent and display real
              time statistics for covid-19. There are also seperate pages
              providing health information and tips for staying occupied
              throughout quarantine.
            </p>
            <div className="btns">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                href="https://github.com/BenRiska/CoronaVirus"
              >
                Github Repo
              </a>
            </div>
          </div>
          <img src={mod2} alt="social media app called link"></img>
        </div>
      </div>
      <footer>Ben Taylor Engineering &copy;</footer>
    </div>
  );
}

export default Projects;
