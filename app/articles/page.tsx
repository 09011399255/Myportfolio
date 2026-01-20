import ArticlesClient from '@/components/articlesClient';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'thoughts - suarau thman',
    description: 'Technical writings and thoughts on design, engineering, and systems thinking.',
};

export default function ArticlesPage() {
    return <ArticlesClient />;
}