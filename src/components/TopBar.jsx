import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="leftBarContent">
        <a className="hamburgerIcon">
          {/* <i className="fas fa-bars " /> */}
          <img src="/images/icons/system/open-menu-symbolic.svg" />
        </a>
        <span>M8anu's Ubuntufolio</span>
      </div>
      <div className="centeredBarContent">
        Sep {new Date().getDate()}{" "}
        {`${String(new Date().getHours()).padStart(2, "0")}:${String(
          new Date().getMinutes()
        ).padStart(2, "0")}`}
      </div>
      <div className="rightBarContent">
        <a href="https://github.com/M8anu" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/_M1ndbl0w" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <Link to="/">
          <img src="/images/icons/system/system-shutdown-symbolic.svg"></img>
        </Link>
      </div>
    </div>
  );
}
