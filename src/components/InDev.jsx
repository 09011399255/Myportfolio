import React, { useEffect, useState } from 'react';
import { ArrowLeft, Code2, Construction, Sparkles, Terminal, Braces } from 'lucide-react';
import conovaImg from '../assets/Conova.png';
import './InDev.css';

const InDev = ({ project, onBack }) => {
    const [text, setText] = useState('');
    const fullText = `> Initializing ${project?.name || 'Project'}...
> Accessing workspace-booking-module...
> Status: UNDER_CONSTRUCTION
> Progress: 64%
> Estimated completion: Soon™
> Applying premium aesthetics...
> Optimizing user flows...`;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="indev-container">
            <button className="back-btn" onClick={onBack}>
                <ArrowLeft size={20} />
                <span>Back to Projects</span>
            </button>

            <div className="indev-content">
                <div className="indev-visual">
                    <div className="indev-icon-wrapper">
                        <img src={conovaImg} alt="Conova" className="indev-main-img" />
                        <motion.div
                            className="floating-icon top-right"
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            <Code2 size={24} color="#FFD700" />
                        </motion.div>
                        <motion.div
                            className="floating-icon bottom-left"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <Braces size={20} color="#F26D40" />
                        </motion.div>
                    </div>
                </div>

                <h1 className="indev-title">Cooking something <span className="text-gradient">Special</span></h1>
                <p className="indev-subtitle">
                    The {project?.name} case study is currently being polished to ensure it meets
                    the highest standards of design engineering.
                </p>

                <div className="code-terminal">
                    <div className="terminal-header">
                        <div className="terminal-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="terminal-title">bash — {project?.name?.toLowerCase()}.sh</span>
                    </div>
                    <div className="terminal-body">
                        <pre className="code-text">{text}<span className="cursor">|</span></pre>
                    </div>
                </div>

                <div className="indev-footer">
                    <p>Want a sneak peek? <a href="mailto:suarauuthman@gmail.com" className="contact-link">Reach out!</a></p>
                </div>
            </div>
        </div>
    );
};

import { motion } from 'framer-motion';

export default InDev;
