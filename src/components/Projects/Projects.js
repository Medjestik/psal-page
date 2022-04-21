import React from 'react';
import './Projects.css';
import iconOne from '../../images/project-1.svg';
import iconSecond from '../../images/project-2.svg';
import iconThree from '../../images/project-3.svg';
import { Link } from 'react-scroll';

function Projects({ onLogin }) {
  return (
    <div className='container project' id='projects'>
      <div className='project__img'>
      </div>
      <ul className='project__list'>
          <li className='project__item'>
            <img className='project__icon' src={iconThree} alt='иконка проекта'></img> 
            <h3 className='project__title'>Курсы</h3>
            <p className='project__subtitle'></p>
            <Link className='project__link' to='programs' smooth={true} offset={-100} duration= {500}>К перечню программ</Link>
          </li>
          <li className='project__item'>
            <img className='project__icon' src={iconOne} alt='иконка проекта'></img>
            <h3 className='project__title'>Методические материалы</h3>
            <p className='project__subtitle'></p>
            <a className='project__link' href='https://dpo.emiit.ru/' target='_blank' rel='noreferrer'>В конструктор ДПП</a>
          </li>
          <li className='project__item'>
            <img className='project__icon' src={iconSecond} alt='иконка проекта'></img>
            <h3 className='project__title'>Конструктор</h3>
            <p className='project__subtitle'></p>
            <a className='project__link' href='https://constructor.emiit.ru/' target='_blank' rel='noreferrer'>В конструктор ДПП</a>
          </li>
        </ul>
    </div>

  );
}

export default Projects;