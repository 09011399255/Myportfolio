export interface ArticleFrontmatter {
    title: string;
    slug: string;
    date: string;
    tags: string[];
    summary: string;
    featuredImage: string;
}


export interface Article {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    summary: string;
    featuredImage: string;
    content: string;
    readTime: string;
}


export interface ArticlePreview {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    summary: string;
    featuredImage: string;
    readTime: string;
}

export interface GetAllArticlesParams {
    page?: number;
    limit?: number;
    search?: string;
}

export interface ArticlesResponse {
    articles: ArticlePreview[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export interface LatestArticlesResponse {
    articles: ArticlePreview[];
}
