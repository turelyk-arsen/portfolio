import React from "react";
import myPhoto from "./../img/Photo.jpg"

export default function About() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">About</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Arsen Turelyk</h2>
            <img
                  src={myPhoto}
                  alt="My_photo"
                  className="project__img\\\\\\\\\\\\\\\\\\\\\\\\"
                />
          </li>
          <li className="content-list__item">
            <p className="p__justify">
              Hello everyone and welcome to my presentation! My name is Arsen
              and I'm excited to have the opportunity to share my journey with
              you. Originally from Ukraine, I relocated to Luxembourg in pursuit
              of a career in web development. I've always been passionate about
              technology and the way it can be used to solve problems and make
              people's lives easier.
            </p>
          </li>
          <li className="content-list__item">
            <p className="p__justify">
              After completing my education in Full Stack Developer course
              organized by ADEM , I decided to pursue a career in web
              development and began studying intensively to enhance my skills in
              both front-end and back-end development. I'm a driven individual
              who is constantly seeking out new challenges and opportunities to
              learn and grow. In my free time, I enjoy experimenting with new
              technologies and building projects to apply what I've learned.
            </p>
          </li>
          <li className="content-list__item">
            <p className="p__justify">
              I'm excited to share my experiences with you and provide insights
              into what I've learned on my journey to becoming a full stack
              developer. Thank you for being here and I hope you find my
              presentation informative and engaging.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
