import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Project({ title, img, id }) {
  return (
    <div>
      <NavLink to={`/project/${id}`}>
        <li className="project">
          <img src={img} alt="Project img" className="project__img" />
          <h3 className="project__title">{title}</h3>
        </li>
      </NavLink>
    </div>
  );
}
