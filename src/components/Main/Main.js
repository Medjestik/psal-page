import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className="container main">
      <h1 className="main__title">Образовательный&nbsp;портал приоритет&nbsp;<span className="main__title_type_highlight-secondary">2030</span></h1>
      <p className="main__subtitle">лидерами&nbsp;становятся</p>
      <ul className="main__list-btn">
        <li className="main__item-btn">
          <a className="main__link-btn" href="https://edu.emiit.ru/" rel="noreferrer" target="_blank">Обучение по программам</a>
        </li>
        <li className="main__item-btn">
          <a className="main__link-btn" href="https://constructor.emiit.ru/" rel="noreferrer" target="_blank">Проектирование программ</a>
        </li>
        <li className="main__item-btn">
          <a className="main__link-btn" href="#" rel="noreferrer" target="_blank">Аналитика по обучению</a>
        </li>
        <li className="main__item-btn">
          <a className="main__link-btn" href="#" rel="noreferrer" target="_blank">Расчет сметы</a>
        </li>
      </ul>
    </main>
  );
}

export default Main; 