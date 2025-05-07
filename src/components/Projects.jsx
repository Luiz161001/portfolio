import React from "react";
import ProjectComp from "./ProjectComp";
import projects from "../data/projects";

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h1 className="title">Projects</h1>
                <div className="projects-container">
                    {projects.map(project => {
                        return (
                            <ProjectComp project={project} />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects;