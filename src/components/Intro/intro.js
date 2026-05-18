import React from 'react';
import './intro.css';
import {Link} from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Alicia Mao</span> <br />Software Engineering Student</span>
                <p className="introPara">Waterloo, ON, Canada | (780) 886-9325 | a24mao@uwaterloo.ca</p>
                <p className="introPara">Full-stack developer with co-op experience building REST APIs, modern browser support, and embedded systems. I deliver scalable solutions using TypeScript, Vue, React, Python, C++, and PostgreSQL.</p>
                <Link to='contact'><button className="btn"><img src={btnImg} alt = "Contact Me" className='btnImg'/>Contact Me</button></Link>
            </div>
        </section>
    )
}

export default Intro;