import React from 'react';
import { experience } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <div className="section" id="experience">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="text-white">3 YEARS OF</span>
                    <span className="text-muted-custom">EXPERIENCE</span>
                </h2>
            </div>

            <div className="experience-list">
                {experience.map((exp, index) => {
                    const content = (
                        <>
                            <div className="exp-main">
                                <h3 className="exp-company">{exp.company}</h3>
                                <span className="exp-role">{exp.role}</span>
                            </div>
                            <div className="exp-desc">
                                <p className="exp-desc-text">{exp.desc}</p>
                            </div>
                            <div className="exp-period">
                                {exp.period}
                            </div>
                        </>
                    );

                    return exp.link ? (
                        <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-item clickable"
                            key={index}
                        >
                            {content}
                        </a>
                    ) : (
                        <div className="experience-item" key={index}>
                            {content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;
