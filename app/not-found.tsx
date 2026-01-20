'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Ghost } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import '@/assets/styles/notFound.css';

export default function NotFound() {
    return (
        <div className="app-root">
            <Header activeSection="" setActiveSection={() => { }} />

            <div className="app-layout">
                <div className="container">
                    <div className="main-layout-wrapper">
                        <aside className="sidebar-v3">
                            <Hero sidebarOnly={true} />
                        </aside>

                        <main className="content-v3">
                            <div className="not-found-container">
                                <div className="not-found-content">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="error-code-wrapper"
                                    >
                                        <h1 className="error-code">404</h1>
                                        <div className="error-glitch-overlay">404</div>
                                        <div className="error-glitch-overlay-2">404</div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="error-text-wrapper"
                                    >
                                        <h2 className="error-title">SYSTEM_BREAKDOWN</h2>
                                        <p className="error-message">
                                            The node you are looking for has been decommissioned or moved to a different coordinate in the system.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        className="error-actions"
                                    >
                                        <Link href="/" className="back-home-btn">
                                            <Home size={20} />
                                            <span>Return to Base</span>
                                        </Link>
                                        <button onClick={() => window.history.back()} className="secondary-btn">
                                            <ArrowLeft size={20} />
                                            <span>Previous State</span>
                                        </button>
                                    </motion.div>
                                </div>

                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.05 }}
                                    transition={{ duration: 2 }}
                                    className="not-found-bg-icon"
                                >
                                    <Ghost size={400} />
                                </motion.div>
                            </div>
                        </main>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
