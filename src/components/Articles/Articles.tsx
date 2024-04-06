import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import MainArticle from '../MainArticle/MainArticle';
import SmallArticle from '../SmallArticle/SmallArticle';
import './Articles.css';
import { NewsAPI } from '../../types';
import { categoryIds } from '../../utils';

export const Articles: FC = () => {
    const { categoryId = 'index' }: { categoryId?: string } = useParams();

    const [articles, setArticles] = React.useState<NewsAPI>({
        items: [],
        categories: [],
        sources: [],
    });

    React.useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + (categoryIds[categoryId] || ''))
            .then((response) => response.json())
            .then((response: NewsAPI) => {
                setArticles(response);
            });
    }, [categoryId]);

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
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                category={category ? category.name : ''}
                                source={source ? source.name : ''}
                            />
                        );
                    })}
                </section>
                <section className="articles__small-col">
                    {articles.items.slice(3, 10).map((item) => {
                        const source = articles.sources.find((sourceItem) => sourceItem.id === item.source_id);
                        return (
                            <SmallArticle
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                date={item.date}
                                source={source?.name || ''}
                            />
                        );
                    })}
                </section>
            </div>
        </main>
    );
};

export default Articles;
