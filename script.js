const categoryIds = {
    index: 0,
    technologies: 1,
    sport: 2,
    fashion: 3,
    other: 5,
};


const Navigation = ({onNavClick, currentCategory, className=""}) => {
    return (
        <nav className={`nav grid ${className}`}>
            <a href="#" className="nav__logo" date-href="index">
                <img className="nav__logo-img" src="./images/logo.svg" alt="логотип"/>
            </a>
            <ul className="nav__list">
                {['Главная', 'Мода', 'Технологии', 'Спорт', 'Другие'].map((item) => {
                    return (
                        <li className="nav__item" key={item}>
                            <a
                                onClick={onNavClick}
                                className={`nav__link ${currentCategory === item ? "nav__link--active" : ""}`}
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
    )
}


const MainArticle = ({title, image, description, category, source}) => {
    return (
        <article className="main-article">
            <div className="main-article__img">
                <img src={image} alt="изображение новости"/>
            </div>
            <div className="main-article__content">
                <h4 className="main-article__category">{category}</h4>
                <h2 className="main-article__title line-limit">{title}</h2>
                <p className="main-article__text line-limit">{description}</p>
                <span className="main-article__src">{source}</span>
            </div>
        </article>
    )
}


const SmallArticle = ({title, source, date}) => {
    return (
        <article className="small-article">
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
                    <Navigation
                        onNavClick={onNavClick}
                        currentCategory={category}
                    />
                </div>
            </header>

            <main className="articles main">
                <div className="container grid">
                    <section className="articles__big-col">
                        {articles.items.slice(0, 6).map((item) => {
                            return(
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
                        {articles.items.slice(0, 16).map((item) => {
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
}

ReactDOM.render(<App />, document.getElementById('root'))