import React from "react";
import skillsData from "../data/skills";
import SkillComp from "./SkillComp";

const Skills = () => {
    return (
        // <section id="skills">
            <div className="skills">
                {/* <h1 className="title">Skills</h1> */}
                <div className="skill-container">
                    {skillsData.map((skillData, index) => {
                      return (
                        <SkillComp key={index} category={skillData.category} skills={skillData.skills}/>
                      ); 
                    })}
                </div>
            </div>
        // </section>
    )
}

export default Skills;