import React from "react";
import SkillsBar from "./SkillsBar";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="left">
                    <p className="text">Hey, I'm Luiz Eduardo</p>

                    <p className="text text1">
                        I'm a Software Developer
                    </p>

                    {/* <SkillsBar/> */}

                    <div className="btn-container">
                        <ul>
                            <li><a href="#" className="btn">First</a></li>
                            <li><a href="#" className="btn">Second</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="right">
                    {/* <img src={pfp} alt="" /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero;