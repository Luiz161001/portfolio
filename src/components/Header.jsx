import React from "react";
import list from "../assets/icons/list.svg"
import close from "../assets/icons/x.svg"

const Header = () => {
    
    const handleClick = () => {
        const nav = document.querySelector('nav');
        const img = document.querySelector('.toggle-btn');
        const display = window.getComputedStyle(nav).display;
        if(display === "none"){
            nav.style.display = 'block';
            img.src = close;
        }
        else{
            nav.style.display = 'none';
            img.src = list;
        }
    }

    return (
        <section id="header">
            <header>
                <div className="header-container">
                    <div className="toggle-container">
                        <img src={list} alt="list-icon" className="toggle-btn" onClick={handleClick} />
                    </div>
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