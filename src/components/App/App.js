import React from "react";
import Navigation from "../Navigation/Navigation.js";
import Articles from "../Articles/Articles.js";
import {Article} from "../Article/Article";
import { categoryIds } from "../utils.js";
import "./App.css";
import "../common.css";


const App = () => {
    const [articleId, setArticleId] = React.useState(null);
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({items: [], categories: [], sources: []});

    const onNavClick = (e) => {
        e.preventDefault();
        setArticleId(null);
        setCategory(e.currentTarget.dataset.href)
    }

    const onArticleClick = (id) => {
        setArticleId(id);
    }

    React.useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + (categoryIds[category] || ''))
            .then(response => response.json())
            .then((response) => {
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
                ? <Article />
                : <Articles articles={articles} onArticleClick={onArticleClick} />
            }

            <footer className="footer">
                <div className="container">
                    <Navigation
                        className={"footer__nav"}
                        onNavClick={onNavClick}
                        currentCategory={category}
                    />
                    <div className="footer__col">
                        <a href="https://vk.com" className="footer__link" target="_blank">Атабегов А</a>
                        <p className="footer__copyright">© 2023</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
};

export default App;