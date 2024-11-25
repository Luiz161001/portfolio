import React from "react";
import list from "../assets/icons/list.svg"

const Header = () => {
    return (
        <section id="header">
            <header>
                <div className="header-container">
                    <img src={list} alt="list-icon" className="list" />
                    <nav>
                        <ul>
                            <li><a href="#hero" className="btn">Home</a></li>
                            <li><a href="#projects" className="btn">Projects</a></li>
                            <li><a href="#about" className="btn contactBtn">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </section>

    )
}

export default Header;