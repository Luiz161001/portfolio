import React from "react";
import pic from "../assets/IMG_6133.png";

const About = () => {
    return (
        <section id="about">
            <div className="left">
                <img src={pic} alt="" />
                <div className="about-text">
                    <p className="text">About</p>
                </div>
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