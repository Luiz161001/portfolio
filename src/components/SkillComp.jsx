const SkillComp = ({ category, skills }) => {
    return (
        <div className="single-skill-container">
            <h1>{category}</h1>
            <div className="skills-box">
                {skills.map(skill => {
                    return (
                        <div className="skill">
                            <img src={skill.icon} alt="react-icon" /><span>{skill.name}</span>
                        </div>  
                    );
                })}
            </div>
        </div>
    );
};

export default SkillComp;