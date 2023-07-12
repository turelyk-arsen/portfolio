import React from "react";

import Project from "../components/project/Project";
import { projects } from "../helper/projectList";

export default function Projects() {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((project, index) => {
              return (
                <Project
                  key={project.id}
                  title={project.title}
                  img={project.img}
                  id={index}
                />
              );
            })}

            {/* <li className="project">
              <a href="./project-page.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Php - Laravel Projects</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src="./img/projects/02.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Java - Spring Boot Projects</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src="./img/projects/03.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">JavaScript - React Projects</h3>
              </a>
            </li>

            <li className="project">
              <img
                src="./img/projects/04.jpg"
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">TypeScript - Angular Projects</h3>
            </li>
            <li className="project">
              <img
                src="./img/projects/05.jpg"
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Html and Css Project</h3>
            </li>
            <li className="project">
              <img
                src="./img/projects/06.jpg"
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Luxkraine project</h3>
            </li> */}
          </ul>
        </div>
      </main>
    </div>
  );
}
