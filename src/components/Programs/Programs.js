import React from 'react';
import './Programs.css';
import programMonit from '../../images/program-monit.png';
import programTim from '../../images/program-tim.png';
import programIts from '../../images/program-its.png';
import programDev from '../../images/program-dev.png';
import programDig from '../../images/program-dig.png';
import programEdu from '../../images/program-edu.png';

function Programs() {
  return (
    <div className="container programs">
      <h3 className="programs__title">Программы <span className="main__title_type_highlight-secondary">2021</span></h3>
      <ul className="programs__list">
        <li className="programs__item">
          <img className="programs__img" src={programEdu} alt="иконка программы"></img>
          <h5 className="programs__item-title">Дистанционные образовательные технологии в профессиональном образовании</h5>
          <a className="programs__item-link" href="#" rel="noreferrer" target="_blank">
            <span className="programs__item-link-text">Подробнее</span>
            <span className="programs__item-link-arrow">&#10140;</span>
          </a>
        </li>
        <li className="programs__item">
          <img className="programs__img" src={programDev} alt="иконка программы"></img>
          <h5 className="programs__item-title">Основы проектирования образовательных программ от результата профессиональной деятельности выпускника. Проектирование компетентностного профиля</h5>
          <a className="programs__item-link" href="https://edu.emiit.ru/ivan/dpp/dpp-dev.pdf" rel="noreferrer" target="_blank">
            <span className="programs__item-link-text">Подробнее</span>
            <span className="programs__item-link-arrow">&#10140;</span>
          </a>
        </li>
        <li className="programs__item">
          <img className="programs__img" src={programDig} alt="иконка программы"></img>
          <h5 className="programs__item-title">Цифровая трансформация в экономике</h5>
          <a className="programs__item-link" href="#" rel="noreferrer" target="_blank">
            <span className="programs__item-link-text">Подробнее</span>
            <span className="programs__item-link-arrow">&#10140;</span>
          </a>
        </li>
      </ul>
      <h3 className="programs__title">Программы <span className="main__title_type_highlight-secondary">2022</span></h3>
      <ul className="programs__list">
        <li className="programs__item">
          <img className="programs__img" src={programMonit} alt="иконка программы"></img>
          <h5 className="programs__item-title">Мониторинг качества создания объектов дорожной инфраструктуры для беспилотного движения</h5>
          <a className="programs__item-link" href="#" rel="noreferrer" target="_blank">
            <span className="programs__item-link-text">Подробнее</span>
            <span className="programs__item-link-arrow">&#10140;</span>
          </a>
        </li>
        <li className="programs__item">
          <img className="programs__img" src={programTim} alt="иконка программы"></img>
          <h5 className="programs__item-title">Применение технологий информационного моделирования на различных стадиях жизненного цикла автомобильных дорог и объектов транспортной инфраструктуры</h5>
          <a className="programs__item-link" href="https://edu.emiit.ru/ivan/dpp/dpp-tim.pdf" rel="noreferrer" target="_blank">
            <span className="programs__item-link-text">Подробнее</span>
            <span className="programs__item-link-arrow">&#10140;</span>
          </a>
        </li>
        <li className="programs__item">
          <img className="programs__img" src={programIts} alt="иконка программы"></img>
          <h5 className="programs__item-title">Разработка проектов интеллектуальных транспортных систем: технико-экономическое обоснование и информационное сопровождение на этапе внедрения</h5>
          <a className="programs__item-link" href="#" rel="noreferrer" target="_blank">
            <span className="programs__item-link-text">Подробнее</span>
            <span className="programs__item-link-arrow">&#10140;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Programs; 