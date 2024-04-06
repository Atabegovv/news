import React, { FC } from 'react';
import MainArticle from '../MainArticle/MainArticle';
import SmallArticle from '../SmallArticle/SmallArticle';
import './Articles.css';
import { NewsAPI } from '../../types';

interface Props {
    articles: NewsAPI;
    onArticleClick: (id: number) => void;
}

const Articles: FC<Props> = ({ articles, onArticleClick }) => {
    return (
        <main className="articles main">
            <div className="container grid">
                <section className="articles__big-col">
                    {articles.items.slice(0, 3).map((item) => {
                        const category = articles.categories.find(
                            (categoryItem) => categoryItem.id === item.category_id,
                        );
                        const source = articles.sources.find((sourceItem) => sourceItem.id === item.source_id);
                        return (
                            <MainArticle
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                category={category ? category.name : ''}
                                source={source ? source.name : ''}
                                onClick={() => onArticleClick(item.id)}
                            />
                        );
                    })}
                </section>
                <section className="articles__small-col">
                    {articles.items.slice(3, 10).map((item) => {
                        const source = articles.sources.find((sourceItem) => sourceItem.id === item.source_id);
                        return (
                            <SmallArticle
                                key={item.id}
                                title={item.title}
                                date={item.date}
                                source={source?.name || ''}
                                onClick={() => onArticleClick(item.id)}
                            />
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default Articles;
