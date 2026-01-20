'use client';

import { motion } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import '@/assets/styles/blogList.css';
import Image from 'next/image';
import { useArticles } from '@/hooks/useArticles';
import IntersectionProvider from '@/components/intersectionProvider';

import { Suspense } from 'react';
import ArticlesSkeleton from '@/components/articles-skeleton';

const ArticlesContent = () => {
    const {
        articles,
        articlesLoading,
        search,
        setSearch,
        fetchNextPage,
        hasNextPage
    } = useArticles();

    return (
        <div className="blog-list-container">
            {/* Header Section */}
            <div className="blog-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="blog-title"
                >
                    <span className="text-white">THE</span>
                    <span className="text-muted-custom">TECH LENS</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ marginTop: '40px', maxWidth: '500px', position: 'relative' }}
                >
                    <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={search || ''}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-input"
                    />
                </motion.div>
            </div>

            {/* Articles List */}
            <IntersectionProvider onIntersect={fetchNextPage} hasNextPage={hasNextPage}>
                <div className="articles-grid">
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
                                className="blog-item"
                            >
                                <Link href={`/articles/${article.slug}`}>
                                    <div className="blog-content-wrapper">
                                        <div className="blog-thumbnail-wrapper">
                                            <Image
                                                src={article.featuredImage}
                                                alt={article.title}
                                                fill
                                                className="blog-thumbnail"
                                            />
                                        </div>
                                        <div className="blog-text-content">
                                            <div className="blog-card-header">
                                                <h2 className="blog-item-title">{article.title}</h2>
                                                <ArrowUpRight className="blog-item-arrow" size={28} />
                                            </div>
                                            <p className="blog-item-summary">{article.summary}</p>
                                            <div className="blog-item-footer">
                                                <span className="blog-item-date">{article.date}</span>
                                                <span className="blog-item-readtime">{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))
                    ) : !articlesLoading && (
                        <div style={{ textAlign: 'center', padding: '100px 0', color: '#666' }}>
                            No articles found matching your search.
                        </div>
                    )}
                    {articlesLoading && (
                        <div style={{ textAlign: 'center', padding: '40px 0', color: '#666' }}>
                            Loading articles...
                        </div>
                    )}
                </div>
            </IntersectionProvider>
        </div>
    );
}

const ArticlesClient = () => {
    const [activeSection] = useState('articles');

    return (
        <div className="app-root">
            <Header activeSection={activeSection} setActiveSection={() => { }} />

            <div className="app-layout">
                <div className="container">
                    <div className="main-layout-wrapper">
                        <aside className="sidebar-v3">
                            <Hero sidebarOnly={true} />
                        </aside>

                        <main className="content-v3">
                            <Suspense fallback={<ArticlesSkeleton />}>
                                <ArticlesContent />
                            </Suspense>
                        </main>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default ArticlesClient;
