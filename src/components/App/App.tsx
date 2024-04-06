import React from 'react';
import Navigation from '../Navigation/Navigation';
import Articles from '../Articles/Articles';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { categoryIds } from '../../utils';
import './App.css';
import '../../common.css';
import { NewsAPI } from '../../types';


const App = () => {
    const [articleId, setArticleId] = React.useState<number | null>(null);
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState<NewsAPI>({ items: [], categories: [], sources: [] });

    const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setArticleId(null);
        const category = e.currentTarget.dataset.href;
        if (category){
            setCategory(category);
        }
    }

    const onArticleClick = (id: number) => {
        setArticleId(id);
    }

    React.useEffect(() => {
        //@ts-ignore
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + (categoryIds[category] || ''))
            .then(response => response.json())
            .then((response: NewsAPI) => {
                setArticles(response);
            })
    }, [category])


    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <Navigation
                        onNavClick={onNavClick}
                        currentCategory={category}
                    />
                </div>
            </header>

            { articleId !== null
                ? <ArticleItem id={articleId} categories={articles.categories} sources={articles.sources} onArticleClick={onArticleClick} />
                : <Articles articles={articles} onArticleClick={onArticleClick} />
            }

            <footer className="footer">
                <div className="container">
                    <Navigation
                        className={'footer__nav'}
                        onNavClick={onNavClick}
                        currentCategory={category}
                    />
                    <div className="footer__col">
                        <a href="https://vk.com" className="footer__link" target="_blank" rel="noreferrer">Атабегов А</a>
                        <p className="footer__copyright">© 2023</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
};

export default App;