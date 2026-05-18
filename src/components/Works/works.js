import React from 'react';
import './works.css';

const projects = [
    {
        title: '3D Minesweeper',
        description: 'Implemented a 3×3×3 Minesweeper game in modern C++ using OpenGL, GLM, GLFW, and GLAD, including bomb generation, adjacency computation, and WASD camera navigation.',
    },
    {
        title: 'Study Spot Finder',
        description: 'Built a responsive map application with React, Leaflet, and Geoapify APIs. Added geocoding, auto-centering, and category-based filtering for study spaces.',
    },
    {
        title: 'Pulse',
        description: 'Designed PostgreSQL schema and wrote Python utilities to manage compatibility scores for a Raspberry Pi + OpenAI API embedded system. Focused on reliable data flow and reusable database functions.',
    },
];

const Works = () => {
    return (
        <section id='works'>
            <div className='worksIntro'>
                <h2 className='worksTitle'>Projects</h2>
                <span className='worksDesc'>A selection of modern projects that demonstrate full-stack development, game implementation, and embedded systems integration.</span>
            </div>
            <div className='workGrid'>
                {projects.map((project) => (
                    <article key={project.title} className='workCard'>
                        <h3>{project.title}</h3>
                        <p className='workDesc'>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Works