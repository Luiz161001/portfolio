import React from "react";
import list from "../assets/icons/list.svg"

const Header = () => {
    return (
        <header id="header">
            <div className="header-container">
                <img src={list} alt="list-icon" className="list" />
                <nav>
                    <ul>
                        <li><a href="#hero" className="btn">Home</a></li>
                        <li><a href="#projects" className="btn">Projects</a></li>
                        <li><a href="#contact" className="btn contactBtn">Contact</a></li>
                    </ul>
                </nav>    
            </div>
        </header>
    )
}

export default Header;