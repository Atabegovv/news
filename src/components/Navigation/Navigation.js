import React from "react";
import "./Navigation.css"
import logo from "../../images/logo.svg"
const Navigation = ({onNavClick, currentCategory, className=""}) => {
    return (
        <nav className={`nav grid ${className}`}>
            <a href="#" className="nav__logo" data-href="index">
                <img className="nav__logo-img" src={logo} alt="логотип"/>
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

export default Navigation