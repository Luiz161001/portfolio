import React from "react";
import experiences from '../data/experience';
import ExperienceComp from "./ExperienceComp";

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <h1 className="title">Experience</h1>
                {experiences.map((experience, index) => (
                    <ExperienceComp key={index} experience={experience} />
                ))}
            </div>
        </section>
    )
}

export default Experience;