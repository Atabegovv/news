import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../images/logo.svg';
import { categoryNames } from '../../utils';

interface Props {
    className?: string;
}
const Navigation: FC<Props> = ({ className = '' }) => {
    return (
        <nav className={`nav grid ${className}`}>
            <NavLink to="/" className="nav__logo">
                <img className="nav__logo-img" src={logo} alt="логотип" />
            </NavLink>
            <ul className="nav__list">
                {['index', 'fashion', 'technologies', 'sport', 'other'].map((item) => {
                    return (
                        <li className="nav__item" key={item}>
                            <NavLink
                                to={`/${item}`}
                                activeClassName="nav__link--active"
                                className="nav__link"
                                isActive={(match) => {
                                    if (match) {
                                        return true;
                                    }
                                    if (match === 'index' && location.pathname === '/') {
                                        return true;
                                    }
                                    return false;
                                }}
                            >
                                {categoryNames[item]}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
