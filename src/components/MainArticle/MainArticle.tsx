import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './MainArticle.css';

interface Props {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    source: string;
}
const MainArticle: FC<Props> = ({ id, title, image, description, category, source }) => {
    return (
        <Link to={`/article/${id}`}>
            <article className="main-article">
                <div className="main-article__img">
                    <img src={image} alt="изображение новости" />
                </div>
                <div className="main-article__content">
                    <h4 className="main-article__category">{category}</h4>
                    <h2 className="main-article__title line-limit">{title}</h2>
                    <p className="main-article__text line-limit">{description}</p>
                    <span className="main-article__src">{source}</span>
                </div>
            </article>
        </Link>
    );
};

export default MainArticle;
