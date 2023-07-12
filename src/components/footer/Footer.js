import React from "react";
import "./style.css";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import telegram from "./../../img/icons/icons8-telegram-50.svg";
import whatsapp from "./../../img/icons/icons8-whatsapp-50.svg";
import email from "./../../img/icons/icons8-email-96.png";

export default function Footer() {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
            <li className="social__item">
                <a href="mailto:arsen.turelyk@gmail.com" target="_blank" rel="noreferrer">
                  <img src={email} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://t.me/+380951532564" target="_blank" rel="noreferrer">
                  <img src={telegram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://api.whatsapp.com/send?phone=380951532564" target="_blank" rel="noreferrer">
                  <img src={whatsapp} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/turelyk-arsen" target="_blank" rel="noreferrer">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/arsen-turelyk" target="_blank" rel="noreferrer">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 Created by Arsen Turelyk</p>
            </div>
          </div>
        </div>
      </footer>
  );
}
