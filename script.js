const categoryIds = {
    index: 0,
    technologies: 1,
    sport: 2,
    fashion: 3,
    other: 5,
};


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

    console.log(articles)

    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <nav className="nav grid">
                        <a href="#" className="nav__logo">
                            <img className="nav__logo-img" src="./images/logo.svg" alt="логотип"/>
                        </a>
                        <ul className="nav__list">
                            {['Главная', 'Мода', 'Технологии', 'Спорт', 'Другие'].map((item) => {
                                return(
                                    <li className="nav__item" key={item}>
                                        <a
                                            onClick={onNavClick}
                                            className={`nav__link ${category === item ? "nav__link--active" : ""}`}
                                            data-href={item}
                                            href="#"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="articles main">
                <div className="container grid">
                    <section className="articles__big-col">
                        {articles.items.slice(0, 6).map((item) => {
                            return(
                                <article className="main-article" key={item.title}>
                                    <div className="main-article__img">
                                        <img src={item.image} alt="изображение новости" />
                                    </div>
                                    <div className="main-article__content">
                                        <h4 className="main-article__category">
                                            {articles.categories.find((categoryItem) => categoryItem.id === item.category_id).name}
                                        </h4>
                                        <h2 className="main-article__title line-limit">{item.title}</h2>
                                        <p className="main-article__text line-limit">{item.description}</p>
                                        <span className="main-article__src">
											{articles.sources.find((sourceItem) => sourceItem.id === item.source_id).name}
										</span>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                    <section className="articles__small-col">
                        {articles.items.slice(0, 16).map((item) => {
                            return (
                                <article className="small-article" key={item.title}>
                                    <h2 className="small-article__title line-limit">{item.title}</h2>
                                    <div className="small-article__caption">
                                        <p className="small-article__date">
                                            {new Date(item.date).toLocaleDateString('ru-RU', {month: 'long', day: 'numeric'})}
                                        </p>
                                        <span className="small-article__src">
											{articles.sources.find((sourceItem) => sourceItem.id === item.source_id).name}
										</span>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <nav className="nav grid footer__nav">
                        <a href="#" className="nav__logo">
                            <img className="nav__logo-img" src="./images/logo.svg" alt="логотип"/>
                        </a>
                        <ul className="nav__list">
                            {['Главная', 'Мода', 'Технологии', 'Спорт', 'Другие'].map((item) => {
                                return(
                                    <li className="nav__item" key={item}>
                                        <a
                                            onClick={onNavClick}
                                            className={`nav__link ${category === item ? "nav__link--active" : ""}`}
                                            data-href={item}
                                            href="#"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="footer__col">
                        <a href="https://vk.com" className="footer__link" target="_blank">Атабегов А</a>
                        <p className="footer__copyright">© 2023</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))