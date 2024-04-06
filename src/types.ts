export interface NewsAPI {
    items: Article[];
    categories: Category[];
    sources: Source[];
}

export interface Article {
    id: number;
    lang: string;
    date: string;
    title: string;
    description: string;
    image: string;
    source_id: number;
    category_id: number;
}

export interface Category {
    id: number;
    name: string;
}

export interface Source {
    id: number;
    name: string;
}

export interface ArticleItemAPI {
    id: number;
    lang: string;
    date: string;
    title: string;
    description: string;
    image: string;
    link: string;
    text: string;
    author: string;
    category: Category;
    source: Source;
}

export interface RelatedArticlesAPI {
    items: Article[];
}

export const beautifulDate = (date: string): string => {
    return new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' });
};
