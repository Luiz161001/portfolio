import React, { useState, useEffect } from "react";
import list from "../assets/icons/list.svg"
import close from "../assets/icons/x.svg"

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setNavVisible(true);
            }
            setNavVisible(false);
        };
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const scroll = (targetId) => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const handleClick = () => {
        setNavVisible(prev => !prev);
    }

    return (
        <section id="header">
            <header style={{backgroundColor: navVisible && isMobile ? 'var(--nav-mobile)' : '', color: navVisible && isMobile ? 'var(--white-text)' : 'var(--primary-text)'}}>
                <div className="header-container">
                    <div className="toggle-container">
                        {isMobile && (
                            <img
                                src={navVisible ? close : list}
                                alt="Toggle Navigation"
                                className="toggle-btn"
                                onClick={handleClick}
                                style={{ cursor: 'pointer' }}
                            />
                        )}
                    </div>
                    <nav style={{ display: navVisible ? 'block' : 'none'}}>
                        <ul>
                            <li onClick={() => scroll('hero')} className="nav-btn">Home</li>
                            {/* <li onClick={() => scroll('skills')} className="nav-btn">Skills</li> */}
                            <li onClick={() => scroll('projects')} className="nav-btn">Projects</li>
                            <li onClick={() => scroll('experience')} className="nav-btn">Experience</li>
                            <li onClick={() => scroll('contact')} className="nav-btn">Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </section>
    )
}

export default Header;