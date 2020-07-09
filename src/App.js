import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <div onClick={handleClick} className="btn-wrapper">
          <div className="burger-btn"></div>
        </div>
      </nav>
      <ul className="slide-nav">
        <li>
          <a href="https://www.linkedin.com/in/ben-taylor-tech/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/benhernandezlt/?hl=en">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://github.com/BenRiska">Github</a>
        </li>
        <li disabled>Ben10Taylor10@Hotmail.com</li>
      </ul>
      <div className="wavy">
        <span data-text="B" style={{ "--i": 1 }}>
          B
        </span>
        <span data-text="e" style={{ "--i": 2 }}>
          e
        </span>
        <span data-text="n" style={{ "--i": 3 }}>
          n
        </span>
        <span data-text="T" style={{ "--i": 4 }}>
          T
        </span>
        <span data-text="a" style={{ "--i": 5 }}>
          a
        </span>
        <span data-text="y" style={{ "--i": 6 }}>
          y
        </span>
        <span data-text="l" style={{ "--i": 7 }}>
          l
        </span>
        <span data-text="o" style={{ "--i": 8 }}>
          o
        </span>
        <span data-text="r" style={{ "--i": 9 }}>
          r
        </span>
      </div>
      <p
        data-text="Software Engineer and Entrepeneur."
        className="sub-header color-text"
      >
        Software Engineer and Entrepeneur.
      </p>
      <div className="buttons">
        <Link to="/projects">
          <span>Projects</span>
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ben-taylor-tech/"
        >
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
let menuOpen = false;

function handleClick() {
  const menuBtn = document.querySelector(".btn-wrapper");
  const menu = document.querySelector(".slide-nav");
  console.log(menuOpen);
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.style.right = "1rem";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.style.right = "-20rem";
    menuOpen = false;
  }
}

export default App;
