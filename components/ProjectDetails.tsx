'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/utils/data';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import Footer from './footer';
import '../assets/styles/projectDetails.css';

interface ProjectDetailsProps {
    project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = useCallback(() => {
        if (project.images) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
        }
    }, [project.images]);

    const handlePrevImage = useCallback(() => {
        if (project.images) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
        }
    }, [project.images]);

    const hasNarrative = !!project.caseStudy;

    return (
        <div className={`project-page ${hasNarrative ? 'narrative-style' : ''}`}>
            <header className="project-page-header">
                <div className="container">
                    <div className="header-inner">
                        <Link href="/" className="back-button">
                            <ArrowLeft size={20} />
                        </Link>
                        {!hasNarrative && <h1 className="project-page-title">{project.name}</h1>}
                        <div className="header-actions">
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="header-btn">
                                    LIVE SITE
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="project-page-main">
                {hasNarrative ? (
                    <>
                        {/* Narrative Hero */}
                        <section className="narrative-hero">
                            <div className="container">
                                <div className="hero-grid">
                                    <div className="hero-main">
                                        <h1 className="hero-title">{project.name}</h1>
                                        <h2 className="hero-subtitle">{project.summary || project.desc}</h2>
                                    </div>
                                    <div className="hero-details">
                                        <div className="detail-item">
                                            <span className="detail-label">Overview</span>
                                            <p className="detail-text">{project.longDesc}</p>
                                        </div>
                                        <div className="detail-row">
                                            <div className="detail-item">
                                                <span className="detail-label">Role</span>
                                                <p className="detail-text">{project.role}</p>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-label">Duration</span>
                                                <p className="detail-text">{project.duration}</p>
                                            </div>
                                        </div>
                                        {project.metrics && (
                                            <div className="hero-metrics">
                                                {project.metrics.map((metric, idx) => (
                                                    <div key={idx} className="metric-card">
                                                        <span className="metric-value">{metric.value}</span>
                                                        <span className="metric-label">{metric.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Personas Section */}
                        {project.personas && (
                            <section className="project-personas">
                                <div className="container">
                                    <span className="section-caption text-center">UNDERSTANDING THE USERS</span>
                                    <h2 className="section-title text-center">User Personas</h2>
                                    <div className="personas-grid">
                                        {project.personas.map((persona, idx) => (
                                            <div key={idx} className="persona-card dark-box">
                                                <div className="persona-header">
                                                    {persona.avatar && (
                                                        <div className="persona-avatar">
                                                            <Image
                                                                src={persona.avatar}
                                                                alt={persona.name}
                                                                width={80}
                                                                height={80}
                                                                className="avatar-img"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="persona-meta">
                                                        <h3 className="persona-name">{persona.name}</h3>
                                                        <p className="persona-role">{persona.role}</p>
                                                    </div>
                                                </div>
                                                <div className="persona-body">
                                                    <p className="persona-desc">{persona.description}</p>
                                                    <div className="persona-details-row">
                                                        <div className="persona-detail-col">
                                                            <h4 className="detail-title">Goals</h4>
                                                            <ul className="detail-list">
                                                                {persona.goals.map((goal, gIdx) => (
                                                                    <li key={gIdx}>{goal}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="persona-detail-col">
                                                            <h4 className="detail-title">Pain Points</h4>
                                                            <ul className="detail-list">
                                                                {persona.painPoints.map((pain, pIdx) => (
                                                                    <li key={pIdx}>{pain}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Narrative Sections */}
                        <section className="case-study-narrative">
                            <div className="container">
                                {project.caseStudy?.map((section, idx) => (
                                    <div key={idx} className={`narrative-section ${section.layout || 'stacked'}`}>
                                        <div className="section-media">
                                            {section.image && (
                                                <div className="media-container dark-box">
                                                    <Image
                                                        src={section.image}
                                                        alt={section.title}
                                                        className="section-img"
                                                        style={{ width: '100%', height: 'auto' }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="section-content">
                                            {section.caption && <span className="section-caption">{section.caption}</span>}
                                            <h3 className="section-title">{section.title}</h3>
                                            <p className="section-desc">{section.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Impact & Lessons */}
                        {(project.impact || project.lessons) && (
                            <section className="project-outcome">
                                <div className="container">
                                    <div className="outcome-grid">
                                        {project.impact && (
                                            <div className="outcome-section">
                                                <h3 className="outcome-title">Impact</h3>
                                                <ul className="outcome-list">
                                                    {project.impact.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {project.lessons && (
                                            <div className="outcome-section">
                                                <h3 className="outcome-title">What I learned</h3>
                                                <ul className="outcome-list">
                                                    {project.lessons.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Screens Section */}
                        {project.screens && (
                            <section className="project-screens">
                                <div className="container">
                                    <h3 className="section-title text-center">Screens</h3>
                                    <div className="screens-grid">
                                        {project.screens.map((screen, idx) => (
                                            <div key={idx} className="screen-item">
                                                <Image
                                                    src={screen}
                                                    alt={`${project.name} screen ${idx + 1}`}
                                                    className="screen-img-full"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </>
                ) : (
                    <>
                        {/* Legacy Layout */}
                        <section className="project-visuals">
                            <div className="container">
                                <div className="carousel-wrapper">
                                    {project.images && project.images.length > 0 ? (
                                        <div className="project-carousel">
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className="carousel-main-image"
                                            >
                                                <Image
                                                    src={project.images[currentImageIndex]}
                                                    alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                                                    fill
                                                    className="main-img"
                                                    priority
                                                />
                                            </motion.div>

                                            {project.images.length > 1 && (
                                                <>
                                                    <button className="carousel-nav prev" onClick={handlePrevImage}>
                                                        <ChevronLeft size={24} />
                                                    </button>
                                                    <button className="carousel-nav next" onClick={handleNextImage}>
                                                        <ChevronRight size={24} />
                                                    </button>
                                                    <div className="carousel-pagination">
                                                        {project.images.map((_, idx) => (
                                                            <span
                                                                key={idx}
                                                                className={`pagination-dot ${idx === currentImageIndex ? 'active' : ''}`}
                                                                onClick={() => setCurrentImageIndex(idx)}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="project-placeholder" style={{ backgroundColor: `${project.color}20` }}>
                                            <div className="placeholder-icon" style={{ backgroundColor: project.color }}>
                                                {project.name[0]}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section className="project-info">
                            <div className="container">
                                <div className="info-grid">
                                    <div className="info-main">
                                        <div className="info-section">
                                            <h2 className="section-label">ABOUT THIS PROJECT</h2>
                                            <div className="section-content">
                                                <p>{project.longDesc || project.desc}</p>
                                            </div>
                                        </div>

                                        {project.role && (
                                            <div className="info-section">
                                                <h2 className="section-label">ROLE IN PROJECT</h2>
                                                <div className="section-content">
                                                    <p>{project.role}</p>
                                                </div>
                                            </div>
                                        )}

                                        {project.responsibilities && (
                                            <div className="info-section">
                                                <h2 className="section-label">MY RESPONSIBILITIES & FEATURES I IMPLEMENTED</h2>
                                                <div className="section-content">
                                                    <ul className="custom-list">
                                                        {project.responsibilities.map((item, idx) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <aside className="info-sidebar">
                                        {project.tools && (
                                            <div className="info-section">
                                                <h2 className="section-label">TECHNICAL SHEET</h2>
                                                <div className="section-content">
                                                    <ul className="tech-list">
                                                        {project.tools.map((tool, idx) => (
                                                            <li key={idx}>{tool}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        <div className="info-section">
                                            <h2 className="section-label">LIVE LINKS</h2>
                                            <div className="section-content actions-stack">
                                                {project.live && (
                                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-action primary">
                                                        View Live Website <ExternalLink size={16} />
                                                    </a>
                                                )}
                                                {project.behance && (
                                                    <a href={project.behance} target="_blank" rel="noopener noreferrer" className="btn-action secondary">
                                                        Behance Case Study <ExternalLink size={16} />
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-action secondary">
                                                        GitHub Repository <Github size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
