import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { ArticlePage } from '../ArticlePage/ArticlePage';
import '../../common.css';
import { Page } from '../Page/Page';
import { AdminPage } from '../AdminPage/AdminPage';
import { AdminArticles } from '../AdminArticles/AdminArticles';
import { AdminArticleItem } from '../AdminArticleItem/AdminArticleItem';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { LoginContainer } from '../../features/auth/login/LoginContainer';
import { HomePage } from '../HomePage/HomePage';

const App: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Switch>
            <Route path="/login">
                <Page>
                    <LoginContainer />
                </Page>
            </Route>
            <PrivateRoute path="/admin" exact>
                <AdminPage>
                    <AdminArticles />
                </AdminPage>
            </PrivateRoute>
            <PrivateRoute path="/admin/create">
                <AdminPage>
                    <AdminArticleItem />
                </AdminPage>
            </PrivateRoute>
            <PrivateRoute path="/admin/edit/:id">
                <AdminPage>
                    <AdminArticleItem />
                </AdminPage>
            </PrivateRoute>
            <Route path="/article/:id">
                <Page>
                    <ArticlePage />
                </Page>
            </Route>
            <Route path="/:category">
                <Page>
                    <CategoryPage />
                </Page>
            </Route>
            <Route path="/">
                <Page>
                    <HomePage />
                </Page>
            </Route>
        </Switch>
    );
};

export default App;
