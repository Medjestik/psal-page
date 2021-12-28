import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="container header">
      <ul className="logo__list">
        <li className="logo__item">
          <a href="https://mintrans.gov.ru/" rel="noreferrer" target="_blank">
            <div className="logo__img logo__img_type_mint"></div>
          </a>
        </li>
        <li className="logo__item">
          <a href="https://www.miit.ru/" rel="noreferrer" target="_blank">
            <div className="logo__img logo__img_type_rut"></div>
          </a>
        </li>
      </ul>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <p className="nav__link">Обучение</p>
          </li>
          <li className="nav__item">
            <p className="nav__link">Программы</p>
          </li>
          <li className="nav__item">
            <p className="nav__link">Конструктор</p>
          </li>
          <li className="nav__item">
            <p className="nav__link">Аналитика</p>
          </li>
          <li className="nav__item">
            <p className="nav__link">Контакты</p>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header; 