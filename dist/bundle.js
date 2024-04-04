const categoryIds = {
  index: 0,
  technologies: 1,
  sport: 2,
  fashion: 3,
  other: 5
};
const Navigation = ({
  onNavClick,
  currentCategory,
  className = ""
}) => {
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav grid ${className}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nav__logo",
    "date-href": "index"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav__logo-img",
    src: "./images/logo.svg",
    alt: "\u043B\u043E\u0433\u043E\u0442\u0438\u043F"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "nav__list"
  }, ['Главная', 'Мода', 'Технологии', 'Спорт', 'Другие'].map(item => {
    return /*#__PURE__*/React.createElement("li", {
      className: "nav__item",
      key: item
    }, /*#__PURE__*/React.createElement("a", {
      onClick: onNavClick,
      className: `nav__link ${currentCategory === item ? "nav__link--active" : ""}`,
      "data-href": item,
      href: "#"
    }, item));
  })));
};
const MainArticle = ({
  title,
  image,
  description,
  category,
  source
}) => {
  return /*#__PURE__*/React.createElement("article", {
    className: "main-article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main-article__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"
  })), /*#__PURE__*/React.createElement("div", {
    className: "main-article__content"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "main-article__category"
  }, category), /*#__PURE__*/React.createElement("h2", {
    className: "main-article__title line-limit"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "main-article__text line-limit"
  }, description), /*#__PURE__*/React.createElement("span", {
    className: "main-article__src"
  }, source)));
};
const SmallArticle = ({
  title,
  source,
  date
}) => {
  return /*#__PURE__*/React.createElement("article", {
    className: "small-article"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "small-article__title line-limit"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "small-article__caption"
  }, /*#__PURE__*/React.createElement("p", {
    className: "small-article__date"
  }, new Date(date).toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric'
  })), /*#__PURE__*/React.createElement("span", {
    className: "small-article__src"
  }, source)));
};
const App = () => {
  const [category, setCategory] = React.useState('index');
  const [articles, setArticles] = React.useState({
    items: [],
    categories: [],
    sources: []
  });
  const onNavClick = e => {
    e.preventDefault();
    setCategory(e.currentTarget.dataset.href);
  };
  React.useEffect(() => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '').then(response => response.json()).then(response => {
      setArticles(response);
    });
  }, [category]);
  console.log(articles);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Navigation, {
    onNavClick: onNavClick,
    currentCategory: category
  }))), /*#__PURE__*/React.createElement("main", {
    className: "articles main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container grid"
  }, /*#__PURE__*/React.createElement("section", {
    className: "articles__big-col"
  }, articles.items.slice(0, 6).map(item => {
    return /*#__PURE__*/React.createElement(MainArticle, {
      key: item.title,
      title: item.title,
      image: item.image,
      description: item.description,
      category: articles.categories.find(categoryItem => categoryItem.id === item.category_id).name,
      source: articles.sources.find(sourceItem => sourceItem.id === item.source_id).name
    });
  })), /*#__PURE__*/React.createElement("section", {
    className: "articles__small-col"
  }, articles.items.slice(0, 16).map(item => {
    return /*#__PURE__*/React.createElement(SmallArticle, {
      key: item.title,
      title: item.title,
      date: item.date,
      source: articles.sources.find(sourceItem => sourceItem.id === item.source_id).name
    });
  })))), /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Navigation, {
    className: "footer__nav",
    onNavClick: onNavClick,
    currentCategory: category
  }), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://vk.com",
    className: "footer__link",
    target: "_blank"
  }, "\u0410\u0442\u0430\u0431\u0435\u0433\u043E\u0432 \u0410"), /*#__PURE__*/React.createElement("p", {
    className: "footer__copyright"
  }, "\xA9 2023")))));
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
