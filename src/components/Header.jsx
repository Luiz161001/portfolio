import React from "react";

const Header = () => {
    return (
        <header id="header">
            <div id="homeLink">
                <a href="#hero">Luiz Eduardo</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;