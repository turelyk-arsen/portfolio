import React from "react";
import { useParams } from "react-router-dom";
import BtnGitHub from "../components/button/btnGitHub/BtnGitHub";
import { projects } from "./../helper/projectList";
import Btn from "../components/button/btn/Btn";

export default function Project() {
  const { id } = useParams();
  const project = projects[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.img_1} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          {project.link && <Btn link={project.link} />}
        </div>

        {project.subProjects &&
          project.subProjects.map((project) => {
            return (
              <main className="section">
                <div className="container">
                  <ul className="projects" >
                    <div className="project-details" key={project.id}>
                      <iframe width="860" height="615"
                        src={project.link}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      <BtnGitHub link={project.gitHubLink} />
                      {project.linkSite && <Btn link={project.linkSite} />}
                    </div>
                  </ul>
                </div>
              </main>
            );
          })}
      </div>
    </main>
  );
}
