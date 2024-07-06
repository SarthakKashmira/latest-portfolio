import { Col } from "react-bootstrap";
import React from 'react';
import './projects.css';
 const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col className="projectsCard">
      <div className="proj-imgbx">
        <img src={imgUrl } alt='logo'className="box-card"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="linki"> 
      <button className="buttonStyle">Code</button>
      </a>
    </Col>
  )
}
export default ProjectCard;
