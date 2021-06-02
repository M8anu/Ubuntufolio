import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="ContactBody">
      <h4>
        Mail <br />
        <a href="mailto:m8anu@workmail.com" target="_blank">
          m8anu@workmail.com
        </a>
      </h4>
      <h4>
        Github:{" "}
        <a href="https://github.com/M8anu" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </h4>
      <h4>
        Twitter :{" "}
        <a href="https://twitter.com/_M1ndbl0w" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </h4>
    </div>
  );
}
