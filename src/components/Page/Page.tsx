import React, { FC } from 'react';
import './Page.css';
import Navigation from '../Navigation/Navigation';

interface Props {
    children: React.ReactNode;
}
export const Page: FC<Props> = ({ children }) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Navigation />
                </div>
            </header>

            <main>{children}</main>

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
        </>
    );
};
