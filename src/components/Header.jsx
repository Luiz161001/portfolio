import React from "react";

const Header = () => {
    return (
        <header id="header">
            <div className="header-container">
                <div id="homeLink">
                    <a href="#home">Luiz Eduardo</a>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home" className="btn">Home</a></li>
                        <li><a href="#projects" className="btn">Projects</a></li>
                        <li><a href="#contact" className="btn nav-contact">Contact</a></li>
                    </ul>
                </nav>    
            </div>
        </header>
    )
}

export default Header;