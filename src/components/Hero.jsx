import React from "react";
import pfp from "../assets/myself.jpg";

const Hero = () => {
    return (
        <section id="hero">
            <div id="left">
                <img src={pfp} alt="Profile Picture"/>
            </div>
            <div id="right">    
                <div className="text">
                    Hey, I'm Luiz Eduardo
                    <div className="hero-effectBox">
                        <span>Software</span>
                        &nbsp;Developer
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;