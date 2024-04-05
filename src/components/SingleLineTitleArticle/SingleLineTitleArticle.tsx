import React, {FC} from "react";
import './SingleLineTitleArticle.css';

interface Props {
    image: string;
    title: string;
    text: string;
    category: string;
    source: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export const SingleLineTitleArticle: FC<Props> = () => {
    return (
        <article className="single-line-title-article">
            <img className="single-line-title-article__image" src="https://cojo.ru/wp-content/uploads/2022/12/stich-2-1.webp" alt={"изображение новости"} />
            <span className="article-category single-line-title-article__category">Мода</span>
            <h2 className="single-line-title-article__title">Заголовок в одну строчку здесь Заголовок в одну строчку здесь</h2>
            <p className="single-line-title-article__text">А вот текст этой новости, в котором что-то интересное поясняется и есть хитрая фраза, заставляющая открыть</p>
            <span className="article-source single-line-title-article__source">Источник</span>
        </article>
    );
};