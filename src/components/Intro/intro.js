import React from 'react';
import './intro.css';
import {Link} from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Alicia</span> <br />Software Engineering Student</span>
                <p className="introPara">I'm a dedicated and responsible programmer with six years of programming experience in various languages including Python, C, and SQL. My passions include problem-solving and creating efficient, accessible, and user-friendly programs.</p>            
                <Link><button className="btn"><img src={btnImg} alt = "Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>
            
        </section>
    )
}

export default Intro;