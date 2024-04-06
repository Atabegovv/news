import React, { FC } from 'react';
import './MainArticle.css';

interface Props {
    title: string;
    image: string;
    description: string;
    category: string;
    source: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
const MainArticle: FC<Props> = ({ title, image, description, category, source, onClick }) => {
    return (
        <article className="main-article" onClick={onClick}>
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
    );
};

export default MainArticle;
