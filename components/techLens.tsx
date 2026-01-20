'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import '../assets/styles/techLens.css';
import { LatestArticlesResponse } from '@/types/articles';



const TechLens = ({ recentBlogs }: { recentBlogs: LatestArticlesResponse }) => {


    return (
        <div className="section" id="techlens">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="text-white">PROCESS &</span>
                    <span className="text-muted-custom">PIXELS</span>
                </h2>
                <Link href="/articles" className="view-all-link">
                    View All <ArrowUpRight size={16} />
                </Link>
            </div>

            <div className="articles-list">
                {recentBlogs.articles.map((article, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="article-item"
                        key={article.slug}
                    >
                        <Link href={`/articles/${article.slug}`} className="article-content-wrapper clickable">
                            <div className="article-thumbnail-wrapper">
                                <Image
                                    src={article.featuredImage}
                                    alt={article.title}
                                    className="article-thumbnail"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="article-text-content">
                                <div className="article-header">
                                    <h3 className="article-title">{article.title}</h3>
                                    <ArrowUpRight className="article-arrow" size={24} />
                                </div>
                                <p className="article-desc">{article.summary}</p>
                                <div className="article-footer">
                                    <span className="article-date">{article.date}</span>
                                    <span className="article-readtime">{article.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default TechLens;
