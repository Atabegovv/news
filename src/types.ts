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