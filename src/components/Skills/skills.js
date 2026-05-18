import React from 'react';
import './skills.css';
import SkillsImg from '../../assets/skills.png';
import ToolsImg from '../../assets/tools.png';
import InterestsImg from '../../assets/interests.png';

const Skills = () => {
    return (
        <section id='skills'>
            <div>
            <h2 className='skillTitle'>About Me</h2>
            <span className='skillDescription'>I am a Software Engineering student at the University of Waterloo with hands-on co-op experience in full-stack development, QA, and product delivery. I enjoy building efficient, accessible, and maintainable solutions across web and embedded systems.</span>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={SkillsImg} alt = "SkillsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Languages</h2>
                        <p>Python, Java, C, C++, Assembly, VHDL, SQL, JavaScript, TypeScript, HTML, CSS, XSL, XML</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ToolsImg} alt = "ToolsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Tools</h2>
                        <p>Git, Linux, VSCode, Visual Studio, Bash, Docker, MySQL, PostgreSQL, SQLite3</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={InterestsImg} alt = "InterestsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Frameworks</h2>
                        <p>Pandas, NumPy, Scikit-learn, React, Vue.js, Flask, Django, Node.js, Sequelize, OpenGL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills