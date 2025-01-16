import React, { useRef } from "react";
import list from "../assets/icons/list.svg"
import close from "../assets/icons/x.svg"

const Header = () => {

    const ref = useRef(null);

    const scroll = (e) => {
        e.preventDefault();

        const id = e.target.textContent.toLowerCase();
        
        const el = document.getElementById(id==="home"?"hero":id);
        el.style.position = "relative";

        setTimeout(() => {
            el.style.position ="sticky";
        }, 10);

        el?.scrollIntoView({behavior: "smooth"});
    }
    
    const handleClick = () => {
        const nav = document.querySelector('nav');
        const img = document.querySelector('.toggle-btn');
        const header = document.querySelector("header");

        const display = window.getComputedStyle(nav).display;
        if(display === "none"){
            nav.style.display = 'block';
            img.src = close;
            header.style.backgroundColor = "#0d11178b";
            header.style.boxShadow = "0 4px 6px #f0f6fc, 0 1px 3px #f0f6fc";
        }
        else{
            nav.style.display = 'none';
            img.src = list;
            header.style.backgroundColor = "#0d111792";
            header.style.boxShadow = "none";
        }
    }


    // with this new effect, i have to add a scroll up thing to make it go up

    return (
        <section id="header">
            <header>
                <div className="header-container">
                    <div className="toggle-container">
                        <img src={list} alt="list-icon" className="toggle-btn" onClick={handleClick} />
                    </div>
                    <nav>
                        <ul>
                            <li onClick={scroll} className="btn">Home</li>
                            <li onClick={scroll} className="btn">Skills</li>
                            <li onClick={scroll} className="btn">Projects</li>
                            <li onClick={scroll} className="btn">Experience</li>
                            <li onClick={scroll} className="btn">Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </section>
    )
}

export default Header;