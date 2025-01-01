import React from 'react';
import './skills.css';
import SkillsImg from '../../assets/skills.png';
import ToolsImg from '../../assets/tools.png';
import InterestsImg from '../../assets/interests.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>About Me</span>
            <span className='skillDescription'>I am a Software Engineering student at the University of Waterloo skilled in both front-end and back-end development. I enjoy the process of creating something new, whether that be a website, game, or something else entirely. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={SkillsImg} alt = "SkillsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Languages</h2>
                        <p>Python, C, C++, SQL, sqlite3, HTML, CSS, Javascript</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ToolsImg} alt = "ToolsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Tools</h2>
                        <p>VSCode, PuTTY, PyCharm, MySQL, React, Flask, Object Oriented Programming</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={InterestsImg} alt = "InterestsImg" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Interests</h2>
                        <p>Reading, Working out, Rock climbing</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills