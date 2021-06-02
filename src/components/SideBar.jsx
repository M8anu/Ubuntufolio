import React from "react";
import "./SideBar.css";
import SideBarAppIcons from "./SideBarAppIcons";

export default function SideBar(props) {
  const appIcons = [
    {
      name: "About",
      altText: "About",
      src: "/images/icons/app/about.svg"
    },
    // {
    //   name: "WebExperience",
    //   altText: "My Web Experience",
    //   src: "/images/icons/app/google-chrome.svg"
    // },
    {
      name: "ContactMe",
      altText: "Contact & Social Links",
      src: "/images/icons/app/mail-app.png"
    },
    {
      name: "TechnicalSkills",
      altText: "Experience",
      src: "/images/icons/app/documents-app.png"
    },
    {
      name: "Help",
      altText: "Consolefolio Bash",
      src: "/images/icons/app/bash.png"
    }
  ];
  return (
    <div className="sideBar">
      {appIcons.map(iconDetail => (
        <SideBarAppIcons iconDetail={iconDetail} />
      ))}
    </div>
  );
}
