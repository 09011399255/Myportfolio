
import { getArticleBySlug, getArticleSlugs, markdownToHtml } from '@/utils/articles/articles';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import '../../../assets/styles/articleDetail.css';


interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getArticleSlugs();

    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ""),
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    try {
        const { slug } = await params;
        const article = await getArticleBySlug(slug);

        return {
            title: `${article.title} | Portfolio`,
            description: article.summary,
            keywords: article.tags?.join(", "),
            openGraph: {
                title: article.title,
                description: article.summary,
                images: [
                    {
                        url: article.featuredImage || '',
                        width: 1200,
                        height: 630,
                        alt: article.title,
                    },
                ],
                type: "article",
                publishedTime: article.date,
            },
            twitter: {
                card: "summary_large_image",
                title: article.title,
                description: article.summary,
                images: [article.featuredImage || ''],
            },
        };
    } catch {
        return {
            title: "Article Not Found",
        };
    }
}

export const revalidate = 3600;

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;

    let article;
    try {
        article = await getArticleBySlug(slug);
    } catch {
        notFound();
    }

    if (!article) notFound();

    const htmlContent = await markdownToHtml(article.content);


    return (
        <div className="app-root">
            {/* <Header activeSection="articles" setActiveSection={() => { }} /> */}

            <div className="app-layout">
                <div className="container">
                    <div className="main-layout-wrapper">
                        <aside className="sidebar-v3 sidebar-mobile-hidden">
                            <Hero sidebarOnly={true} />
                        </aside>

                        <main className="content-v3">
                            <article className="article-detail-container">
                                <Link href="/articles" className="back-btn">
                                    <ArrowLeft size={20} />
                                    <span>Back to Articles</span>
                                </Link>

                                <div className="article-hero-img-wrapper">
                                    <Image
                                        src={article.featuredImage}
                                        alt={article.title}
                                        fill
                                        className="article-hero-img"
                                        priority
                                    />
                                </div>

                                <div className="article-meta-row">
                                    <span className="article-date">{article.date}</span>
                                    <span className="article-readtime">{article.readTime}</span>
                                </div>

                                <h1 className="article-main-title">{article.title}</h1>

                                <div
                                    className="rendered-content"
                                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                                />
                            </article>
                        </main>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
