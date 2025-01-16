import React from "react";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h1 className="title">Skills</h1>
                <div className="skill-container">
                    <div className="single-skill-container">
                        <h1>Frontend</h1>
                        <div className="skills-box">
                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react-icon" /><span>React</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="next-icon" /><span>Next.js</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="javascript-icon" /><span>JavaScript</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript-icon" /><span>Typescript</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html-icon" /><span>HTML</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg" alt="css-icon" /><span>CSS</span>
                            </div>

                        </div>
                    </div>

                    <div className="single-skill-container">
                        <h1>Backend</h1>
                        <div className="skills-box">
                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python-icon" /> <span>Python</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="node-icon" /> <span>Node.js</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express-icon" /><span>Express.js</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" alt="django-icon" /><span>Django</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-skill-container">
                        <h1>DevOps</h1>
                        <div className="skills-box">
                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git-icon" /> <span>Git</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="github-icon" /> <span>GitHub</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="aws-icon" /> <span>AWS</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="vercel-icon" /> <span>Vercel</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman-icon" /> <span>Postman</span>
                            </div>
                            
                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/docker/docker-tile.svg" alt="docker-icon" /> <span>Docker</span>
                            </div>
                            
                        </div>
                    </div>

                    <div className="single-skill-container">
                        <h1>Database/Cache</h1>
                        <div className="skills-box">
                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" alt="mysql-icon" /> <span>MySQL</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="postgresql-icon" /> <span>PostgreSQL</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb-icon" /> <span>MongoDB</span>
                            </div>

                            <div className="skill">
                                <img src="https://www.vectorlogo.zone/logos/redis/redis-icon.svg" alt="redis-icon" /> <span>Redis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;