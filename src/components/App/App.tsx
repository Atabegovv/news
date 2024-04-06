import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Articles from '../Articles/Articles';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import './App.css';
import '../../common.css';

const App = () => {
    return (
        <Router>
            <header className="header">
                <div className="container">
                    <Navigation />
                </div>
            </header>

            <main>
                <Switch>
                    <Route path="/article/:id">
                        <ArticleItem />
                    </Route>
                    <Route path="/:categoryId">
                        <Articles />
                    </Route>
                    <Route path="/">
                        <Articles />
                    </Route>
                </Switch>
            </main>

            <footer className="footer">
                <div className="container">
                    <Navigation className={'footer__nav'} />
                    <div className="footer__col">
                        <a href="https://vk.com" className="footer__link" target="_blank" rel="noreferrer">
                            Атабегов А
                        </a>
                        <p className="footer__copyright">© 2023</p>
                    </div>
                </div>
            </footer>
        </Router>
    );
};

export default App;
