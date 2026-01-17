import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import agrohiveImg from '../assets/Agrohive.png';
import sportaImg from '../assets/Sporta.png';
import fliqueImg from '../assets/Flique.png';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
    const getProjectImage = (name) => {
        if (name === 'Agrohive') return agrohiveImg;
        if (name === 'Sporta AI') return sportaImg;
        if (name === 'Flique') return fliqueImg;
        return null;
    };

    return (
        <div className="section" id="projects">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="text-white">MY</span>
                    <span className="text-muted-custom">PROJECTS</span>
                </h2>
            </div>

            <div className="projects-list-v2">
                {projects.map((project, index) => {
                    const img = getProjectImage(project.name);
                    return (
                        <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noopener noreferrer" className="project-row-v2" key={index}>
                            <div className="project-row-left">
                                <div
                                    className="project-thumb-v2"
                                    style={{
                                        background: img ? 'none' : `linear-gradient(45deg, ${project.color}40, ${project.color}10)`,
                                        borderRadius: '16px',
                                        backgroundColor: '#222'
                                    }}
                                >
                                    {img ? (
                                        <img src={img} alt={project.name} className="project-thumb-img" />
                                    ) : (
                                        <div className="project-thumb-icon" style={{ backgroundColor: project.color }}>
                                            {project.name[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="project-row-info">
                                    <h3 className="project-row-name">{project.name}</h3>
                                    <p className="project-row-desc">{project.desc}</p>
                                </div>
                            </div>
                            <div className="project-row-arrow">
                                <ArrowUpRight size={24} />
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
