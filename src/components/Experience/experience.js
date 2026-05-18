import React from 'react';
import './experience.css';

const roles = [
    {
        title: 'Royal Canadian Air Force – Full-Stack Developer Co-op',
        period: 'January 2026 - April 2026',
        points: [
            'Designed and implemented 50+ RESTful APIs using TypeScript, Sequelize, and PostgreSQL.',
            'Co-designed all foundational database schemas with scalable domain boundaries.',
            'Built responsive, accessible Vue.js components with Vuetify and shipped two full web applications.',
        ],
    },
    {
        title: 'i4i Inc. – Software QA/Developer Co-op',
        period: 'May 2025 - August 2025',
        points: [
            'Modernized legacy XSL and JavaScript code to support Chrome and Edge browsers.',
            'Integrated and tested updates in a Maven/Tomcat/Nginx staging pipeline.',
            'Identified and documented 30+ defects while collaborating with developers to verify fixes.',
        ],
    },
    {
        title: 'TechBytes Foundation – Student Programmer',
        period: 'June 2023 - August 2023',
        points: [
            'Analyzed and visualized data using Pandas, NumPy, and scikit-learn.',
            'Used k-means clustering to uncover relationships between customer demographics and spending.',
        ],
    },
];

const Experience = () => {
    return (
        <section id='experience'>
            <div className='experienceHeader'>
                <span className='experienceTitle'>Experience</span>
                <span className='experienceSubtitle'>Co-op roles and programming work that highlight technical breadth, system design, and software delivery.</span>
            </div>
            <div className='experienceGrid'>
                {roles.map((role) => (
                    <article key={role.title} className='experienceCard'>
                        <div className='experienceCardHeader'>
                            <h3>{role.title}</h3>
                            <span>{role.period}</span>
                        </div>
                        <ul>
                            {role.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;
