import React from "react";

const Footer = () => {
    let year = new Date();
    year = year.getFullYear();

    return (
        <footer>
            <div id="footer">&copy; { year } Luiz Eduardo. All rights reserved.</div>
        </footer>
    )
}

export default Footer;