import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '../data';
import './TechLens.css';

const TechLens = ({ limit, onArticleClick }) => {
    const displayedArticles = limit ? articles.slice(0, limit) : articles;

    return (
        <div className="section" id="techlens">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="text-white">DESIGN</span>
                    <span className="text-muted-custom">THOUGHTS</span>
                </h2>
            </div>

            <div className="articles-list">
                {displayedArticles.map((article, index) => (
                    <div
                        className="article-item clickable"
                        key={index}
                        onClick={() => onArticleClick && onArticleClick(article)}
                    >
                        <div className="article-header">
                            <h3 className="article-title">{article.title}</h3>
                            <ArrowUpRight className="article-arrow" size={24} />
                        </div>
                        <p className="article-desc">{article.desc}</p>
                        <div className="article-footer">
                            <span className="article-date">{article.date}</span>
                            <span className="article-readtime">{article.readTime}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechLens;
