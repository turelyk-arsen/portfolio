import React from "react";
import "./style.css";
import cv from "./../../pdf/CV_Turelyk_Arsen_10_2023.pdf"
/*import coverLetter from "./../../pdf/Cover Letter_Arsen Turelyk.pdf"*/

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, I am <em>Arsen</em>
            </strong>
            <br />Junior Full Stack Developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href={cv} className="btn btn-left">
            Download CV
          </a>
          {/*<a href={coverLetter} className="btn">Cover letter </a>*/}
        </div>
      </header>
    </div>
  );
}
