import React, { FC } from 'react';
import './ArticleItem.css';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import { Article, ArticleItemAPI, beautifulDate, Category, RelatedArticlesAPI, Source } from '../../types';

interface Props {
    id: number;
    categories: Category[];
    sources: Source[];
    onArticleClick: (id: number) => void;
}

export const ArticleItem: FC<Props> = ({ id, sources, categories, onArticleClick }) => {
    const [articleItem, setArticleItem] = React.useState<ArticleItemAPI | null>(null);
    const [relatedArticles, setRelatedArticles] = React.useState<Article[] | null>(null);

    React.useEffect(() => {
        fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
            .then((response) => response.json())
            .then((response: ArticleItemAPI) => {
                setArticleItem(response);
            });

        fetch(`https://frontend.karpovcourses.net/api/v2/news/related/${id}?count=9`)
            .then((response) => response.json())
            .then((response: RelatedArticlesAPI) => {
                setRelatedArticles(response.items);
            });
    }, [id]);

    if (articleItem === null || relatedArticles === null) {
        return null;
    }

    return (
        <section className="article-page">
            <article className="article">
                {articleItem.image.length ? (
                    <section className="article__hero" style={{ backgroundImage: `url("${articleItem.image}")` }}>
                        <div className="container article__hero-content">
                            <div className="grid">
                                <h1 className="article__hero-title">{articleItem.title}</h1>
                            </div>

                            <div className="grid">
                                <span className="article-category article__category">{articleItem.category.name}</span>
                                <span className="article-date article__date">{beautifulDate(articleItem.date)}</span>
                            </div>
                        </div>
                    </section>
                ) : null}

                <div className="grid container article__main">
                    <div className="article__content">
                        {!articleItem.image.length && (
                            <div className="article__title-container">
                                <h1 className="article__title">{articleItem.title}</h1>

                                <div className="grid">
                                    <span className="article-category article__category">
                                        {articleItem.category.name}
                                    </span>
                                    <span className="article-date article__date">
                                        {beautifulDate(articleItem.date)}
                                    </span>
                                </div>
                            </div>
                        )}

                        <p>{articleItem.text}</p>
                    </div>

                    <div className="article__small-column">
                        {relatedArticles.slice(3, 9).map((item) => {
                            const category = categories.find((categoryItem) => categoryItem.id === item.category_id);
                            const source = sources.find((sourceItem) => sourceItem.id === item.source_id);

                            return (
                                <RelatedSmallArticle
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    category={category?.name || ''}
                                    source={source?.name || ''}
                                    onClick={() => onArticleClick(item.id)}
                                />
                            );
                        })}
                    </div>
                </div>
            </article>

            <section className="article-page__related-articles">
                <div className="container">
                    <h2 className="article-page__related-articles-title">Читайте также:</h2>

                    <div className="grid article-page__related-articles-list">
                        {relatedArticles.slice(0, 3).map((item) => {
                            const category = categories.find((categoryItem) => categoryItem.id === item.category_id);
                            const source = sources.find((sourceItem) => sourceItem.id === item.source_id);

                            return (
                                <SingleLineTitleArticle
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    text={item.description}
                                    category={category?.name || ''}
                                    source={source?.name || ''}
                                    onClick={() => onArticleClick(item.id)}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </section>
    );
};
