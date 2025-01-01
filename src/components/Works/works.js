import React from 'react';
import './works.css';
import PulseImg from '../../assets/pulse.png';
import ScheImg from '../../assets/schedule_generator.png';
import WebImg from '../../assets/logo.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Past Projects</h2>
            <span className='worksDesc'>I have experience designing and creating websites, building games, and managing databases.</span> <br />
            <a href='https://github.com/alickiam/pulse' className='link'><img src={PulseImg} alt = "PulseImg" className="projImg"></img>Pulse</a> <br />
            <p className='workDesc'>Pulse is an embedded systems project that runs on a Raspberry Pi Zero. The Pi receives data from a microphone and two heartrate sensors, which is analyzed to produce a set of compatibility scores for the pair. These scores are then stored in a database and retrieved to be displayed on a web site when a user logs in to their account.</p> <br />
            <a href='https://github.com/alickiam/schedulegenerator' className='link'><img src={ScheImg} alt = "ScheImge" className="projImg"></img>Schedule Generator</a> <br />
            <p className='workDesc'>Schedule Generator is a web app developed using Python and HTML with Flask. The user may input tasks they need to to complete, and the program generates a schedule that is stored in a local database and is displayed on the web app.</p> <br />
            <a href='https://github.com/alickiam/personal_website' className='link'><img src={WebImg} alt = "Logo" className="projImg"></img>Portfolio Website</a> <br />
            <p className='workDesc'>This is a website that lets users learn a little about me! It is created using CSS, HTML, and Javascript with React.</p> <br />
        </section>
    );
}

export default Works