import React from "react";
import pfp from "../assets/myself.png";

const About = () => {
    return (
        <section id="about">
            <div className="left">
                {/* <img src={pfp} alt="" /> */}
                <div className="test">

                </div>
                <p className="text">About</p>
            </div>
            <div className="right">
                <p className="text">Contact</p>
                <ul>
                    <li>
                        <a href="">lvieiradepaulo00@gmail.com</a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/lvieiradepaulo/" target="_blank">linkedin.com/in/lvieiradepaulo</a></li>
                </ul>
            </div>
        </section>
    )
}

export default About;