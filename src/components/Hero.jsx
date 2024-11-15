import React from "react";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="left">

                    <p className="text text0">Hi, my name is</p>
                    <p className="text text1">Luiz Eduardo</p>
                    <p className="text text2">I'm a Full Stack Developer</p>
                    <p className="text text3">I love learning new stuff and building things. When I'm not coding, I will be either at the gym lifting weights or reading books!</p>

                    <div className="btn-container">
                        <ul>
                            <li><a href="#contact" className="btn contactBtn">Let's talk</a></li>
                            <li><a href="#" className="btn">Resume</a></li>
                        </ul>
                    </div>

                    <div className="socials">
                        <a href="www.linkedin.com/in/lvieiradepaulo" target="_blank">LinkedIn</a>
                        <a href="https://github.com/Luiz161001" target="_blank">GitHub</a>
                    </div>
                    
                </div>
                <div className="right"></div>
            </div>
        </section>
    )
}

export default Hero;