import React from "react";
import pfp from "../assets/myself.png";

const About = () => {
    return (
        <section id="about">
            <div className="left">
                <img src={pfp} alt="" />
                <p className="text">about</p>
            </div>
            <div className="right">
                <p className="text">contact</p>
                <ul>
                    <li><a href="https://www.linkedin.com/in/lvieiradepaulo/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/Luiz161001" target="_blank">GitHub</a></li>
                </ul>
            </div>
        </section>
    )
}

export default About;