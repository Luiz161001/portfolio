import React from 'react'

function ExperienceComp({ experience }) {
    return (
        <div>
            <div className="experience-card">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
                <p>{experience.time}</p>
                <p>{experience.description}</p>
                <ul>
                    {experience.skills.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceComp;