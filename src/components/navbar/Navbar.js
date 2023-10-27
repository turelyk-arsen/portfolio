import React from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../button/btnDarkMode/BtnDarkMode";
import "./style.css";

export const Navbar = () => {

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>My freelancer</strong> portfolio
            </NavLink>

          <BtnDarkMode/>

            <ul className="nav-list">
            <li className="nav-list__item">
                <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
