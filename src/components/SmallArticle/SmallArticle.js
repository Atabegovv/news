import React from "react";
import "./SmallArticle.css";

const SmallArticle = ({title, source, date, onClick}) => {
    return (
        <article className="small-article" onClick={onClick}>
            <h2 className="small-article__title line-limit">{title}</h2>
            <div className="small-article__caption">
                <p className="small-article__date">
                    {new Date(date).toLocaleDateString('ru-RU', {month: 'long', day: 'numeric'})}
                </p>
                <span className="small-article__src">{source}</span>
            </div>
        </article>
    )
}

export default SmallArticle