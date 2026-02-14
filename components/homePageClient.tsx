'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from '@/components/scrollReveal';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Toolbox from '@/components/toolbox';
import TechLens from '@/components/techLens';
import BeyondPortfolio from '@/components/beyondPortfolio';
import Contact from '@/components/contact';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { LatestArticlesResponse } from '@/types/articles';

const HomePageClient = ({ recentBlogs }: {
    recentBlogs: LatestArticlesResponse
}) => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSection]);

    useEffect(() => {
        const handleLocationChange = () => {
            const hash = window.location.hash.replace(/^#\/?/, '');
            if (!hash || hash === '') {
                setActiveSection('home');
            } else {
                setActiveSection(hash);
            }
        };

        window.addEventListener('hashchange', handleLocationChange);
        handleLocationChange();

        return () => window.removeEventListener('hashchange', handleLocationChange);
    }, []);

    useEffect(() => {
        let targetHash = '';
        if (activeSection === 'home') {
            targetHash = '';
        } else {
            targetHash = `#/${activeSection}`;
        }

        if (window.location.hash !== targetHash && !(window.location.hash === '' && targetHash === '')) {
            window.location.hash = targetHash;
        }
    }, [activeSection]);

    const renderContent = () => {
        if (activeSection === 'home') {
            return (
                <>
                    <ScrollReveal><Hero contentOnly={true} /></ScrollReveal>
                    <ScrollReveal delay={0.1}><Projects /></ScrollReveal>
                    <ScrollReveal delay={0.1}><Experience /></ScrollReveal>
                    <ScrollReveal delay={0.1}><Toolbox /></ScrollReveal>
                    <ScrollReveal delay={0.1}><TechLens recentBlogs={recentBlogs} /></ScrollReveal>
                    <ScrollReveal delay={0.1}><BeyondPortfolio /></ScrollReveal>
                    <ScrollReveal delay={0.1}><Contact /></ScrollReveal>
                </>
            );
        }

        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="content-v3"
                >
                    {activeSection === 'projects' && <Projects />}
                    {activeSection === 'experience' && (
                        <>
                            <Experience />
                            <Toolbox />
                        </>
                    )}
                    {activeSection === 'articles' && <TechLens recentBlogs={recentBlogs} />}
                    {activeSection === 'beyond' && <BeyondPortfolio />}
                    {activeSection === 'contact' && <Contact />}

                    {activeSection !== 'contact' && <Contact />}
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <div className="app-root">
            <Header activeSection={activeSection} setActiveSection={setActiveSection} />

            <div className="app-layout">
                <div className="container">
                    <div className="main-layout-wrapper">
                        <aside className={`sidebar-v3 ${activeSection !== 'home' ? 'sidebar-mobile-hidden' : ''}`}>
                            <Hero sidebarOnly={true} />
                        </aside>

                        <main className="content-v3">
                            {renderContent()}
                        </main>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default HomePageClient;
