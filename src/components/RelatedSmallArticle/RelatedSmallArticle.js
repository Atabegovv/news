import React from "react";
import './RelatedSmallArticle.css';

export const RelatedSmallArticle = () => {
    return (
        <article className="related-small-article">
            <img className="related-small-article__image" src="https://cojo.ru/wp-content/uploads/2022/12/stich-2-1.webp" />
            <div className="related-small-article__content">
                <span className="article-category related-small-article__category">Мода</span>
                <h2 className="related-small-article__title">Это слова-филлеры для этой новости можно одну строку, а тут даже две или три влезет</h2>
                <span className="article-source related-small-article__source">Источник</span>
            </div>
        </article>
    );
};