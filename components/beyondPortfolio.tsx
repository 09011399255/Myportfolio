import { motion } from 'framer-motion';
import bookImg from '../assets/images/book.png';
import yusuffImg from '../assets/images/yusuff.png';
import markImg from '../assets/images/Mark.png';
import bethanImg from '../assets/images/Bethan.png';
import bolarinwaImg from '../assets/images/Bolarinwa.png';
import sultanImg from '../assets/images/Sultan.png';
import '../assets/styles/beyondPortfolio.css';
import Image from 'next/image';

const BeyondPortfolio = () => {
    return (
        <div className="section" id="beyond">
            <div className="beyond-container">
                {/* Header Section */}
                <div className="beyond-header">
                    <h2 className="beyond-main-title">
                        <span className="text-white">BEYOND</span>
                        <span className="text-muted-custom">PORTFOLIO</span>
                    </h2>
                    <p className="beyond-subtitle">Get to know more about me</p>
                </div>

                {/* Bento Grid Layout - 3 Cards Left */}
                <div className="bento-grid-v2">
                    {/* Main Reading Card - Left Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bento-item reading-box-v2"
                    >
                        <div className="card-top">
                            <span className="card-tag">LIFESTYLE</span>
                            <h3>Currently Reading</h3>
                        </div>
                        <p className="card-desc-reading">I believe great design starts with a great mindset. Currently diving into The 5 AM Club, a guide to building discipline, focus, and winning your mornings before the day gets busy.</p>
                        <div className="book-visual-v2">
                            <Image src={bookImg} alt="Book" width={300} height={300} />
                            <div className="book-glow"></div>
                        </div>
                    </motion.div>

                    {/* Right Column Stack */}
                    <div className="right-stack">
                        {/* Persona Card - Branded Orange */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bento-item persona-box-orange"
                        >
                            <div className="persona-content">
                                <div className="card-top-row">
                                    <h3>My Persona</h3>
                                </div>
                                <p className="persona-sub">Quirky bits that shape my creative process</p>
                                <div className="persona-bubbles">
                                    <span className="bubble-white">Curious cat</span>
                                    <span className="bubble-white">Explorer</span>
                                    <span className="bubble-white">Night-Owl</span>
                                    <span className="bubble-white">Social</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* People I Build With - Dark/Teal Accent */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bento-item people-box-v2"
                        >
                            <div className="card-top-row">
                                <h3>People I Build With</h3>
                            </div>
                            <p className="people-desc">Designers, developers & dreamers who help bring big ideas to life. Together we turn complex problems into elegant solutions.</p>
                            <div className="people-footer">
                                <div className="collaborators-avatars">
                                    <Image src={yusuffImg} alt="Yusuff" width={40} height={40} />
                                    <Image src={markImg} alt="Mark" width={40} height={40} />
                                    <Image src={bethanImg} alt="Bethan" width={40} height={40} />
                                    <Image src={bolarinwaImg} alt="Bolarinwa" width={40} height={40} />
                                    <Image src={sultanImg} alt="Sultan" width={40} height={40} />
                                    <div className="more-collabs">+12</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeyondPortfolio;