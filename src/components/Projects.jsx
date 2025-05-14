import React, { useState } from "react";
import ProjectComp from "./ProjectComp";
import projects from "../data/projects";
import { Pagination } from "./Pagination";

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfProjectsPerPage, setNumberOfProjects] = useState(3);

    const lastIndex = currentPage * numberOfProjectsPerPage;
    const firstIndex = lastIndex - numberOfProjectsPerPage;

    const currentProjects = projects.slice(firstIndex, lastIndex);
    
    return (
        <section id="projects">
            <div className="container">
                <h1 className="title">Projects</h1>
                <div className="projects-container">
                    {currentProjects.map((project, index) => {
                        return (
                            <ProjectComp key={index} project={project} />
                        );
                    })}
                </div>
                <Pagination totalProjects={projects.length} numberOfProjectsPerPage={numberOfProjectsPerPage} changePage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </section>
    )
}

export default Projects;