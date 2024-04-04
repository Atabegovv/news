import React from "react";
import Navigation from "../Navigation/Navigation.js";
import Articles from "../Articles/Articles.js";
import { categoryIds } from "../utils.js";
import MainArticle from "../MainArticle/MainArticle";
import SmallArticle from "../SmallArticle/SmallArticle";
import "./App.css";
import "../common.css";


const App = () => {
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({items: [], categories: [], sources: []});

    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href)
    }

    React.useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
            .then(response => response.json())
            .then((response) => {
                setArticles(response);
            })
    }, [category])

    console.log(category)

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

            <main className="articles main">
                <div className="container grid">
                    <section className="articles__big-col">
                        {articles.items.slice(0, 3).map((item) => {
                            return (
                                <MainArticle
                                    key={item.title}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    category={articles.categories.find((categoryItem) => categoryItem.id === item.category_id).name}
                                    source={articles.sources.find((sourceItem) => sourceItem.id === item.source_id).name}
                                />
                            )
                        })}
                    </section>
                    <section className="articles__small-col">
                        {articles.items.slice(3, 10).map((item) => {
                            return (
                                <SmallArticle
                                    key={item.title}
                                    title={item.title}
                                    date={item.date}
                                    source={articles.sources.find((sourceItem) => sourceItem.id === item.source_id).name}
                                />
                            )
                        })}
                    </section>
                </div>
            </main>


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