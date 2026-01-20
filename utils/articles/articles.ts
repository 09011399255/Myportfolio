import path from "path";
import fs from "fs/promises";
import { existsSync,  readdirSync } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Article, ArticleFrontmatter, ArticlePreview, ArticlesResponse, GetAllArticlesParams, LatestArticlesResponse } from "@/types/articles";

const articlesDirectory = path.join(process.cwd(), "content");


export function getArticleSlugs(): string[] {
    if (!existsSync(articlesDirectory)) {
        return [];
    }
    return readdirSync(articlesDirectory).filter((file) => file.endsWith(".md"));
}

function calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
}


export async function getArticleBySlug(slug: string): Promise<Article> {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, `${realSlug}.md`);

    if (!existsSync(fullPath)) {
        throw new Error(`Article not found: ${slug}`);
    }

    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as ArticleFrontmatter;

    return {
        slug: realSlug,
        title: frontmatter.title,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
        summary: frontmatter.summary,
        featuredImage: frontmatter.featuredImage,
        content,
        readTime: calculateReadTime(content)
    };
}


export async function getArticlePreview(slug: string): Promise<ArticlePreview> {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, `${realSlug}.md`);

    if (!existsSync(fullPath)) {
        throw new Error(`Article not found: ${slug}`);
    }

    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as ArticleFrontmatter;

    return {
        slug: realSlug,
        title: frontmatter.title,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
        summary: frontmatter.summary,
        featuredImage: frontmatter.featuredImage,
        readTime: calculateReadTime(content)
    };
}


export async function markdownToHtml(markdown: string): Promise<string> {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}


export async function getAllArticles(params: GetAllArticlesParams = {}): Promise<ArticlesResponse> {
    const { page = 1, limit = 10, search } = params;

    const slugs = getArticleSlugs();


    let articles = await Promise.all(
        slugs.map((slug) => getArticlePreview(slug))
    );


    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (search) {
        const searchLower = search.toLowerCase();
        articles = articles.filter((article) => {
            const titleMatch = article.title.toLowerCase().includes(searchLower);
            const summaryMatch = article.summary.toLowerCase().includes(searchLower);
            const tagsMatch = article.tags?.some((tag) =>
                tag.toLowerCase().includes(searchLower)
            );

            return titleMatch || summaryMatch || tagsMatch;
        });
    }

    const total = articles.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;

    const paginatedArticles = articles.slice(offset, offset + limit);

    return {
        articles: paginatedArticles,
        pagination: {
            total,
            page,
            limit,
            totalPages,
        },
    };
}


export async function getLatestArticles(limit: number = 3): Promise<LatestArticlesResponse> {
    const slugs = getArticleSlugs();


    const articles = await Promise.all(
        slugs.map((slug) => getArticlePreview(slug))
    );

    const sortedArticles = articles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);

    return {
        articles: sortedArticles
    };
}