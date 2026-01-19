import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '../data';
import './TechLens.css';
import designSystemImg from '../assets/image.png';
import codeImg from '../assets/Code.png';
import firstImg from '../assets/First.png';
import overDesignImg from '../assets/overdesign.png';

const TechLens = ({ limit, onArticleClick }) => {
    const displayedArticles = limit ? articles.slice(0, limit) : articles;

    const getThumbnail = (title) => {
        const t = title.toLowerCase();
        if (t.includes('design system')) return designSystemImg;
        if (t.includes('ai-driven')) return "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070";
        if (t.includes('industrial engineering')) return "https://images.unsplash.com/photo-1581094794329-c8112a4e5190?auto=format&fit=crop&q=80&w=2070";
        if (t.includes('learning to code')) return codeImg;
        if (t.includes('over-design')) return overDesignImg;
        if (t.includes('how i use ai')) return "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=2070";
        return firstImg;
    };

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
                        <div className="article-content-wrapper">
                            <div className="article-thumbnail-wrapper">
                                <img src={getThumbnail(article.title)} alt="" className="article-thumbnail" />
                            </div>
                            <div className="article-text-content">
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechLens;
