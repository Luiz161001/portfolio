import React from "react";

const ProjectComp = ({ project }) => {
    return (
        <div className="project-container">
            <div className="project-images">
                <img src={project.images[0]} alt="" />
            </div>
            <div className="project-info">
                <h1>{project.name}</h1>
                <p>{project.description}</p>    
                <div  className="project-collaborators">
                    <h3>Collaborators:</h3>
                    {project.members.map((member, index) => {
                        return (
                            <a key={index} href={member.github}>{member.name}</a>
                        );
                    })}
                </div>
                <div className="project-links">
                    {project.url ? <a href="">Live</a> : <p>Not deployed</p>}
                    <a href={project.repo}>Code Source</a>
                </div>
            </div>             
        </div>
    )
}

export default ProjectComp;