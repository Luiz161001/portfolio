import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h1 className="title">Contact Me</h1>
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Contact Info</h2>
                        <ul>
                            <li>
                                <a href="mailto:lvieiradepaulo00dev@gmail.com" target="_blank">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    lvieiradepaulo00dev@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/lvieiradepaulo/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    linkedin.com/in/lvieiradepaulo/
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Luiz161001" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                    github.com/Luiz161001
                                </a>
                            </li>
                        </ul>
                    </div>
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

            </div>
        </section>
    )
}

export default Contact;