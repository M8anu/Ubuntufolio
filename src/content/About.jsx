import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="AboutBody">
      <div className="ProfilePic">
        <img className="" src="/images/M8anu.jpeg" alt="M8anu's Corporeum" />
      </div>
      <Typist
        avgTypingDelay={50}
        cursor={{
          show: true,
          blink: true,
          element: '_',
          hideWhenDone: true,
          hideWhenDoneDelay: 500,
        }}
      >
        <h1 className="whoami">Who am I?</h1>
        <Typist.Backspace count={7} delay={500} />
        <h2>I am Manuel Ariza L&oacute;pez</h2>
        <h3>Junior Software Engineer.</h3>
        <h3>Focused on creating beautiful User Experiences, videogames and videoconsoles, backend development, server administration and many more!</h3>
        <h3> 
          Recently graduated{' '}
          <a href="https://www.uma.es/grado-en-ingenieria-del-software" target="_blank" rel="noopener noreferrer">
            Software Engineering at University Of Malaga.
          </a>
        </h3>
        <h3>Available for Full-time Remote or In-Office work opportunities.</h3>
        <h3>
          Download my full resume{' '}
          <a href="https://github.com/M8anu/Consolefolio/raw/master/Manuel%20Resume.pdf" target="_blank" rel="noopener noreferrer">
            here.
          </a>
        </h3>
      </Typist>
    </div>
  );
}
