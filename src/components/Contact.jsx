import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h1 className="title">Contact Me</h1>
                <div className="contact-container">
                    <div className="form-box">
                        <h2>Let's work on a project together!</h2>
                        <form className="contact-form">
                            <div className="contact-div">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="contact-div">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="contact-div">
                                <textarea name="" id="" placeholder="Please enter your message here"></textarea>
                            </div>
                            <button className="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;