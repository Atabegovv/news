import React, { FC } from 'react';
import './SmallArticle.css';
import { beautifulDate } from '../../types';

interface Props {
    title: string;
    source: string;
    date: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
const SmallArticle: FC<Props> = ({ title, source, date, onClick }) => {
    return (
        <article className="small-article" onClick={onClick}>
            <h2 className="small-article__title line-limit">{title}</h2>
            <div className="small-article__caption">
                <p className="small-article__date">{beautifulDate(date)}</p>
                <span className="small-article__src">{source}</span>
            </div>
        </article>
    );
};

export default SmallArticle;
