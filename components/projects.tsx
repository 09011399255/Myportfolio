import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../assets/styles/projects.css';
import { projects } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
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
                    const img = project.images && project.images.length > 0 ? project.images[0] : null;
                    return (
                        <Link href={`/projects/${project.id}`} key={index} className="project-row-v2-link">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="project-row-v2"
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
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
