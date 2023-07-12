import project_1 from "./../img/projects/download.png";
import project_2 from "./../img/projects/spring-boot-logo_01.png";
import project_3 from "./../img/projects/react_01.png";
import project_4 from "./../img/projects/angular_01.png";
import project_5 from "./../img/projects/css_0001.jpg";
import project_6 from "./../img/projects/bootstrap-logo_001.png";
import project_6_1 from "./../img/projects/lux.jpg";

const projects = [
  {
    id: 1,
    title: "Php - Laravel Projects",
    skills: "Php, OOP, Laravel, MySQL",
    img: project_1,
    subProjects: [
      {
        id: 1,
        link: "https://www.youtube.com/embed/Wkf6YCRySmQ",
        gitHubLink: "https://github.com/turelyk-arsen/social_network",
      },
      {
        id: 2,
        link: "https://www.youtube.com/embed/Dtms0CKJX0o",
        gitHubLink: "https://github.com/turelyk-arsen/backend/tree/main/Laravel",
      },
    ],
  },
  {
    id: 2,
    title: "Java - Spring Boot Projects",
    skills: "Spring Boot, Thymeleaf, MySQL",
    img: project_2,
    subProjects: [
        {
          id: 1,
          link: "https://www.youtube.com/embed/V-Z0a4_HHtA",
          gitHubLink: "https://github.com/turelyk-arsen/student-management-system",
        },
        {
          id: 2,
          link: "https://www.youtube.com/embed/Yq_oDfpdquo",
          gitHubLink: "https://github.com/turelyk-arsen/springboot-backend-angular",
        },
      ],
  },
  {
    id: 3,
    title: "TypeScript - Angular Projects",
    skills: "TypeScript, Angular",
    img: project_4,
    subProjects: [
        {
          id: 1,
          link: "https://www.youtube.com/embed/Yq_oDfpdquo",
          gitHubLink: "https://github.com/turelyk-arsen/angular-spring",
        },
      ],
  },
  {
    id: 4,
    title: "JavaScript - React Projects",
    skills: "React, Next.js",
    img: project_3,
    subProjects: [
        {
          id: 1,
          img: '',
          link: "https://eloquent-cendol-c896f4.netlify.app/",
          linkSite: "https://eloquent-cendol-c896f4.netlify.app/",
          gitHubLink: "https://github.com/turelyk-arsen/react-task-tracker",
        },
        {
            id: 2,
            img: '',
            linkSite: "https://kaleidoscopic-jalebi-9ebc66.netlify.app/",
            link: "https://kaleidoscopic-jalebi-9ebc66.netlify.app/",
            gitHubLink: "https://github.com/turelyk-arsen/react-course",
          },
          {
            id: 3,
            img: '',
            link: "https://master--capable-queijadas-569dbe.netlify.app/",
            linkSite: "https://master--capable-queijadas-569dbe.netlify.app/",
            gitHubLink: "https://github.com/turelyk-arsen/react-fund-course",
          },
      ],
  },
  {
    id: 5,
    title: "Html and Css Project",
    skills: "Html, Css",
    img: project_5,
  },
  {
    id: 6,
    title: "Luxkraine project",
    skills: "Html, Css, Bootstrap, responsible website",
    img: project_6,
    img_1: project_6_1,
    gitHubLink: "https://github.com/turelyk-arsen/Luxkraine",
    link: "https://luxkraine.000webhostapp.com/",
  },
];

export { projects };
