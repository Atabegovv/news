export interface NewsAPI {
    items: Article[];
    categories: Category[];
    sources: Source[];
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
    category: Category;
    source: Source;
    author?: string;
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

export interface RelatedArticlesAPI {
    items: Article[];
}

export interface Source {
    id: number;
    name: string;
    site?: string;
}

export interface IPartnerArticle {
    id: string;
    'company-name': string;
    title: string;
    description: string;
    text: string;
    image: string;
    created: {
        nanoseconds: number;
        seconds: number;
    };
}

export type CategoryNames = 'politics' | 'sport' | 'tech' | 'karpov.courses' | 'fashion' | 'other';

export interface Category {
    id: number;
    name: CategoryNames;
}

export const beautifulDate = (date: string): string => {
    return new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' });
};
