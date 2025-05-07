import React from "react";
import Typewriter from "typewriter-effect";
import Skills from "./Skills";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="left">
                    <p className="text text0">Hi, my name is</p>
                    <p className="text text1">Luiz Eduardo</p>
                    <p className="text text2">& I'm a
                        <span className="text-color">
                            <Typewriter
                                options={{
                                    strings: ["Full Stack Developer", "Software Developer", "Teacher Assistant"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    pauseFor: 4000,
                                }}
                            />
                        </span>
                    </p>
                    <p className="text text3">I love learning new stuff and building things. When I'm not coding, I will be either at the gym lifting weights or reading books!</p>

                    <div className="btn-container">
                        <ul>
                            <li><a href="#about" className="btn contactBtn">Let's talk</a></li>
                            <li><a href="#" className="btn resume">Resume</a></li>
                        </ul>
                    </div>

                    <div className="socials">
                        <a href="https://www.linkedin.com/in/lvieiradepaulo/" target="_blank">
                            <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="linkedin-icon" />
                        </a>
                        <a href="https://github.com/Luiz161001" target="_blank">
                            <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="github-icon" />
                        </a>
                    </div>

                </div>
                <div className="right">
                    <Skills />
                </div>
            </div>
        </section>
    )
}

export default Hero;