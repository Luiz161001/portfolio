import React from "react";
import pfp from "../assets/myself.png";

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="left">
                    <p className="text">Project 1</p>
                </div>
                <div className="right">
                    <img src={pfp} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Projects;