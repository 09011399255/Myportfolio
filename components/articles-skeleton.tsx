'use client';

import React from 'react';
import '@/assets/styles/blogList.css';

const ArticlesSkeleton = () => {
    return (
        <div className="articles-grid">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="blog-item" style={{ opacity: 0.5 }}>
                    <div className="blog-content-wrapper">
                        <div className="blog-thumbnail-wrapper skeleton-animate" style={{ background: '#1a1a1a' }}></div>
                        <div className="blog-text-content">
                            <div className="blog-card-header">
                                <div className="skeleton-animate" style={{ height: '32px', width: '70%', background: '#1a1a1a', borderRadius: '4px' }}></div>
                            </div>
                            <div className="blog-item-summary skeleton-animate" style={{ height: '20px', width: '100%', background: '#1a1a1a', borderRadius: '4px', marginTop: '10px' }}></div>
                            <div className="blog-item-summary skeleton-animate" style={{ height: '20px', width: '90%', background: '#1a1a1a', borderRadius: '4px', marginTop: '5px' }}></div>
                            <div className="blog-item-footer" style={{ marginTop: '20px' }}>
                                <div className="skeleton-animate" style={{ height: '16px', width: '100px', background: '#1a1a1a', borderRadius: '4px' }}></div>
                                <div className="skeleton-animate" style={{ height: '16px', width: '80px', background: '#1a1a1a', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <style jsx>{`
                .skeleton-animate {
                    position: relative;
                    overflow: hidden;
                }
                .skeleton-animate::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    transform: translateX(-100%);
                    background-image: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0) 0,
                        rgba(255, 255, 255, 0.05) 20%,
                        rgba(255, 255, 255, 0.1) 60%,
                        rgba(255, 255, 255, 0)
                    );
                    animation: shimmer 2s infinite;
                }
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    );
};

export default ArticlesSkeleton;
