'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/utils/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import Footer from './footer';
import '../assets/styles/projectDetails.css';

interface ProjectDetailsProps {
    project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    const router = useRouter();
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


    return (
        <div className={`project-page`}>
            <header className="project-page-header">
                <div className="container">
                    <div className="header-inner">
                        <button
                            onClick={() => router.back()}
                            className="back-button"
                            style={{ flexShrink: 0 }}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <h1 className="project-page-title">
                            {project.name}
                        </h1>
                        <div className="header-spacer"></div>
                    </div>
                </div>
            </header>

            <main className="project-page-main">
                {/* Standard Project Preview (Conova Style) */}
                <section className="project-visuals">
                    <div className="container">
                        <div className="carousel-wrapper" style={{
                            background: '#0a0a0a',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.7)',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            {project.images && project.images.length > 0 ? (
                                <div className="project-carousel" style={{ position: 'relative' }}>
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="carousel-main-image"
                                        style={{ height: '100%', width: '100%', position: 'relative' }}
                                    >
                                        <Image
                                            src={project.images[currentImageIndex]}
                                            alt={`${project.name} preview`}
                                            fill
                                            className="main-img"
                                            priority
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </motion.div>

                                    {project.images.length > 1 && (
                                        <>
                                            <button className="carousel-nav prev" onClick={handlePrevImage} style={{ left: '30px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', width: '44px', height: '44px' }}>
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button className="carousel-nav next" onClick={handleNextImage} style={{ right: '30px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', width: '44px', height: '44px' }}>
                                                <ChevronRight size={24} />
                                            </button>
                                            <div className="carousel-pagination" style={{ bottom: '30px' }}>
                                                {project.images.map((_, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`pagination-dot ${idx === currentImageIndex ? 'active' : ''}`}
                                                        onClick={() => setCurrentImageIndex(idx)}
                                                        style={{ width: '8px', height: '8px', margin: '0 6px', background: idx === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.3)' }}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className="project-placeholder" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="placeholder-icon" style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '30px',
                                        backgroundColor: project.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '3rem',
                                        color: '#fff',
                                        fontWeight: 800
                                    }}>
                                        {project.name[0]}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                <section className="project-details-grid">
                    <div className="container">
                        <div className="details-layout">
                            {/* Left Column */}
                            <div className="details-main-col">
                                <div className="detail-block" style={{ marginBottom: '60px' }}>
                                    <h3 className="detail-caption" style={{ color: '#555', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '25px' }}>ABOUT THIS PROJECT</h3>
                                    <p className="detail-text" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#888', fontWeight: 400 }}>
                                        {project.longDesc || project.desc}
                                    </p>
                                </div>

                                {project.role && (
                                    <div className="detail-block" style={{ marginBottom: '60px' }}>
                                        <h3 className="detail-caption" style={{ color: '#555', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '25px' }}>ROLE IN PROJECT</h3>
                                        <p className="detail-text" style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600 }}>
                                            {project.role}
                                        </p>
                                    </div>
                                )}

                                {project.responsibilities && project.responsibilities.length > 0 && (
                                    <div className="detail-block">
                                        <h3 className="detail-caption" style={{ color: '#555', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '25px' }}>MY RESPONSIBILITIES & FEATURES I IMPLEMENTED</h3>
                                        <ul className="responsibility-list" style={{ listStyle: 'none', padding: 0 }}>
                                            {project.responsibilities.map((item, idx) => (
                                                <li key={idx} style={{
                                                    position: 'relative',
                                                    paddingLeft: '25px',
                                                    marginBottom: '18px',
                                                    color: '#888',
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.6'
                                                }}>
                                                    <span style={{ position: 'absolute', left: 0, color: '#fff', fontWeight: 900 }}>•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Right Column */}
                            <div className="details-side-col">
                                <div className="detail-block" style={{ marginBottom: '50px' }}>
                                    <h3 className="detail-caption" style={{ color: '#555', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '25px' }}>TECHNICAL SHEET</h3>
                                    <div className="tech-stack-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {project.tools?.map((tool, idx) => (
                                            <div key={idx} style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>{tool}</div>
                                        ))}
                                    </div>

                                    {/* Pill Buttons Header Actions */}
                                    <div className="pill-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '40px' }}>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                                                padding: '10px 20px',
                                                borderRadius: '40px',
                                                background: '#fff',
                                                border: '1px solid #fff',
                                                color: '#000',
                                                fontSize: '0.75rem',
                                                fontWeight: 900,
                                                textDecoration: 'none',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>LIVE SITE</a>
                                        )}
                                        {project.behance && (
                                            <a href={project.behance} target="_blank" rel="noopener noreferrer" style={{
                                                padding: '10px 20px',
                                                borderRadius: '40px',
                                                background: '#000',
                                                border: '1px solid #333',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontWeight: 900,
                                                textDecoration: 'none',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>CASE STUDY</a>
                                        )}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                                                padding: '10px 20px',
                                                borderRadius: '40px',
                                                background: '#000',
                                                border: '1px solid #333',
                                                color: '#fff',
                                                fontSize: '0.75rem',
                                                fontWeight: 900,
                                                textDecoration: 'none',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>GITHUB</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
