import React from "react";
import pfp from "../assets/myself.jpg";

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="left">
                    <p className="text">Hey, I'm Luiz Eduardo</p>

                    <p className="text text1">
                        I'm a Software Developer
                    </p>

                    <p className="text text2">
                        I'm a full stack developer with a strong foundation in computer science, always eager to expand my skills. When I'm not creating something new, I'm either exploring data structures, assisting students, or pushing limits in the gym.
                    </p>
                    <div className="btn-container">
                        <ul>
                            <li><a href="#" className="btn">First</a></li>
                            <li><a href="#" className="btn">Second</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <img src={pfp} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Projects;