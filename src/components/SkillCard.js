import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

import "./SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;

    return (
        <div className="card">
        <div className="image-warapper">
          <img src={skill.content.image}  alt={'Skill'}/>   
        
        </div>
        <div className="skill-title-wrapper">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
export default SkillCard;
