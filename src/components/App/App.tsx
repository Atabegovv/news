import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Articles from '../Articles/Articles';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import '../../common.css';
import { Page } from '../Page/Page';
import { AdminPage } from '../AdminPage/AdminPage';

const App: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main>
            <Switch>
                <Route path="/admin">
                    <AdminPage />
                </Route>
                <Route path="/article/:id">
                    <Page>
                        <ArticleItem />
                    </Page>
                </Route>
                <Route path="/:categoryId">
                    <Page>
                        <Articles />
                    </Page>
                </Route>
                <Route path="/">
                    <Page>
                        <Articles />
                    </Page>
                </Route>
            </Switch>
        </main>
    );
};

export default App;
