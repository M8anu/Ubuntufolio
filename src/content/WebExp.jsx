import React from "react";
import "./WebExp.css";
import logoPeque from '../images/Logogrande.jpg';

export default function WebExp() {
  return (
    <div className="WebExpBody">
      <div className="ExpCard">
        <div className="ExpImage">
          <img src={logoPeque} alt="UMA Logo" />
        </div>
        <div className="ExpContent">
          {/**/}
          <p>
          Network and Wi-Fi installation Intern.
            <br />
            Experience: 2 months: June 2017 - July 2017
          </p>
          <p>
          Developed the installation of the gateway, switches rack, cabling, VoIP Telephone Network installation and Wi-Fi Ubiquiti access points, conforming a solid and stable Mesh Internet Network.
          As part of making the theoretical End Of Studies Project of my colleagues <a href="https://github.com/Melchor629"> Melchor</a> and Antonio a reality.
          </p>
        </div>
      </div>
      <div className="ExpCard">
        <div className="ExpImage">
          <img src={logoPeque} alt="UMA Logo" />
        </div>
        <div className="ExpContent">
          {/**/}
          <p>
          Web Content Manager and Server Administrator + Event/Activities Moderator + Web App Developer
            <br />
            Experience: 6 months: November 2020 - May 2021
          </p>
          <p>
          Migrated the whole vicerrectorado content from a Joomla managed site to the new Merengue managed university.
          Published and edited all the information concerning news and events from the vicerrectorado.
          Applied styles and added customization to the <a href="https://www.uma.es/smart-campus"> Smart Campus' site. </a> 
          Developed a Web Application, <a href="http://osm.uma.es/mapa">an interactive map with all POT of UMA's Campus.</a>
          </p>
        </div>
      </div>

      <div className="ExpCard">
        <div className="ExpContent">
          {/**/}
          <p>
          DevOps Engineer at Verisk Sequel Business Solutions
            <br />
            Experience: July 2021 - 
          </p>
          <p>
          In charge of environment deploys, both in Microsoft Azure DevOps and AWS, scripting, database management. 
          Continuous integration and migration from UI declared pipelines to code-templated(.yaml) ones.
          Framework integrations such as SonarQube, Dynatrace, Cypress, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
