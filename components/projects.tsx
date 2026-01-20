import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import agrohiveImg from '../assets/images/Agrohive.png';
import sportaImg from '../assets/images/Sporta.png';
import fliqueImg from '../assets/images/Flique.png';
import solaraImg from '../assets/images/Solara.png';
import conovaImg from '../assets/images/Conova.png';

import '../assets/styles/projects.css';
import { Project, projects } from '@/utils/data';
import Image from 'next/image';

interface ProjectsProps {
    onProjectClick?: (project: Project) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
    const getProjectImage = (name: string) => {
        if (name === 'Agrohive') return agrohiveImg;
        if (name === 'Sporta AI') return sportaImg;
        if (name === 'Flique') return fliqueImg;
        if (name === 'Solara') return solaraImg;
        if (name === 'Conova') return conovaImg;
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
                    const isInternal = project.internal;
                    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                        if (isInternal) {
                            e.preventDefault();
                            if (onProjectClick) onProjectClick(project);
                        }
                    };
                    return (
                        <motion.a
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            href={project.link || "#"}
                            target={project.link && !isInternal ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="project-row-v2"
                            key={index}
                            onClick={handleClick}
                        >
                            <div className="project-row-left">
                                <div
                                    className="project-thumb-v2"
                                    style={{
                                        background: img ? 'none' : `linear-gradient(45deg, ${project.color}40, ${project.color}10)`,
                                        backgroundColor: '#222'
                                    }}
                                >
                                    {img ? (
                                        <Image src={img} alt={project.name} className="project-thumb-img" width={100} height={100} />
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
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;