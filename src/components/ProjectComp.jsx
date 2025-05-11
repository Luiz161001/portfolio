import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectComp = ({ project }) => {

    // Function to returun jsx code for collaborators
    const renderCollaborators = () => {
        return (
            <ul>
                {project.members.map((member, index) => {
                    return (
                        <li key={index} >
                            <a href={member.github}>
                                <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="react-icon" />
                                {member.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    };
    return (
        <div className="project-container">
            <div className="project-images">
                <img src={project.images[0]} alt="" />
            </div>
            <div className="project-info">
                <h1>{project.name}</h1>
                <p>{project.description}</p>


                {/* <div className="project-collaborators">
                    <h3>Collaborators:</h3>
                    {project.members.length > 0 ? renderCollaborators() : <p>No collaborators</p>}
                </div> */}

                <div className="project-technologies">
                    <h3>Technologies:</h3>
                    <ul>
                        {project.technologies.map((tech, index) => {
                            return (
                                <li key={index} >
                                    {tech}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="project-links">
                    {project.url ? <a href={project.url} className="link-btn">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    Live</a>
                        :
                        <a className="link-btn">Not deployed</a>}
                    <a href={project.repo}>
                        <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="react-icon" />
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectComp;