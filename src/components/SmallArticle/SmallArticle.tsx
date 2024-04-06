import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './SmallArticle.css';
import { beautifulDate } from '../../types';

interface Props {
    id: number;
    title: string;
    source: string;
    date: string;
}
const SmallArticle: FC<Props> = ({ id, title, source, date }) => {
    return (
        <Link to={`/article/${id}`}>
            <article className="small-article">
                <h2 className="small-article__title line-limit">{title}</h2>
                <div className="small-article__caption">
                    <p className="small-article__date">{beautifulDate(date)}</p>
                    <span className="small-article__src">{source}</span>
                </div>
            </article>
        </Link>
    );
};

export default SmallArticle;
