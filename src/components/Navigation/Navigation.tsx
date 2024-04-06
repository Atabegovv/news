import React, { FC } from 'react';
import './Navigation.css'
import logo from '../../images/logo.svg'
import { categoryNames } from '../../utils';

interface Props {
    onNavClick: (event: React.MouseEvent<HTMLElement>) => void;
    currentCategory: string;
    className?: string;
}
const Navigation: FC<Props> = ({ onNavClick, currentCategory, className='' }) => {
    return (
        <nav className={`nav grid ${className}`}>
            <a href="#" className="nav__logo" data-href="index">
                <img className="nav__logo-img" src={logo} alt="логотип"/>
            </a>
            <ul className="nav__list">
                {['index', 'fashion', 'technologies', 'sport', 'other'].map((item) => {
                    return (
                        <li className="nav__item" key={item}>
                            <a
                                onClick={onNavClick}
                                className={`nav__link ${currentCategory === item ? 'nav__link--active' : ''}`}
                                data-href={item}
                                href="#"
                            >
                                {/*@ts-ignore*/}
                                {categoryNames[item]}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation