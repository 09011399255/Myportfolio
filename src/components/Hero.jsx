import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/my anime profile.jpg';
import './Hero.css';

const Hero = ({ sidebarOnly, contentOnly }) => {
    const roles = ["Product Designer", "Frontend Engineer", "UX Designer", "UI Designer", "Design Engineer"];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    if (sidebarOnly) {
        return (
            <motion.div
                className="profile-card-v2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Decorative Dotted Path with animation */}
                <svg className="dotted-path" viewBox="0 0 300 400" fill="none">
                    <motion.path
                        d="M50 20 C 10 60, 100 80, 80 120"
                        stroke="#f26d40"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, -20] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                    <motion.path
                        d="M20 300 C 60 320, 80 280, 120 340"
                        stroke="#f26d40"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, 20] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                </svg>

                <motion.div
                    className="profile-img-container"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                >
                    <img src={profileImg} alt="Suarau Uthman" className="profile-img-v2" />
                    <div className="profile-status-dot"></div>
                </motion.div>

                <motion.h2
                    className="profile-name-v2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Suarau Uthman
                </motion.h2>

                <div className="profile-role-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={roles[roleIndex]}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="profile-role-dynamic"
                        >
                            {roles[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <motion.p
                    className="profile-bio-v2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    A professional with deep software engineering knowledge,
                    creating thoughtful, user-centered and innovative products
                </motion.p>

                <div className="social-links-v2">
                    <motion.a whileHover={{ y: -3, color: 'var(--accent-orange)' }} href="https://www.behance.net/157c990authman" target="_blank" rel="noopener noreferrer"><Globe size={18} /></motion.a>
                    <motion.a whileHover={{ y: -3, color: 'var(--accent-orange)' }} href="https://x.com/designeng?s=21" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></motion.a>
                    <motion.a whileHover={{ y: -3, color: 'var(--accent-orange)' }} href="https://www.instagram.com/dhee_cr8tives?igsh=M2FlZnc5M2FwMm92&utm_source=qr" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></motion.a>
                </div>
            </motion.div>
        );
    }

    if (contentOnly) {
        return (
            <div className="section hero-content-section" id="home">
                <div className="hero-content-v2">
                    <h1 className="hero-main-title">
                        <span className="text-white">Design</span>
                        <span className="text-muted-custom">ENGINEER</span>
                    </h1>

                    <p className="hero-subtext-v2">
                        Passionate about creating and building intuitive and engaging user experiences.
                        Specialize in transforming ideas into beautifully crafted products.
                    </p>

                    <div className="hero-stats-v2">
                        <div className="stat-v2">
                            <h3>+3</h3>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="stat-v2">
                            <h3>+10</h3>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <div className="stat-v2">
                            <h3>+5</h3>
                            <p>WORLDWIDE CLIENTS</p>
                        </div>
                    </div>

                    <div className="hero-cta-grid-v2">
                        <div
                            className="cta-card-v2 orange-card clickable"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="cta-texture"></div>

                            <h4>Building intuitive and high-performing digital experiences across web and mobile platforms</h4>
                            <div className="cta-arrow-btn">
                                <ArrowRight size={20} />
                            </div>
                        </div>

                        <div
                            className="cta-card-v2 lime-card clickable"
                            onClick={() => document.getElementById('techlens')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="cta-texture"></div>

                            <h4 className="text-black">Optimizing systems and processes to build better and faster products</h4>
                            <div className="cta-arrow-btn dark">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default Hero;
