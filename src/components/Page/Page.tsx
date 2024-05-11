import React, { FC } from 'react';
import './Page.css';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';

interface Props {
    children: React.ReactNode;
}
export const Page: FC<Props> = ({ children }) => {
    return (
        <>
            <header className="header">
                <div className="container header__container">
                    <Logo />
                    <Navigation className="header__nav" />
                </div>
            </header>

            <main>{children}</main>

            <footer className="footer">
                <div className="container footer__container">
                    <div className="footer__top">
                        <Logo />
                        <Navigation className={'footer__nav'} />
                    </div>
                    <a className="footer__link" href="https://vk.com" target="_blank" rel="noreferrer">
                        &copy; Атабегов А
                    </a>
                </div>
            </footer>
        </>
    );
};
