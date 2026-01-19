import React from 'react';
import { motion } from 'framer-motion';
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
                        <motion.a
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-item clickable"
                            key={index}
                        >
                            {content}
                        </motion.a>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="experience-item"
                            key={index}
                        >
                            {content}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;
