import React from 'react';
import './Programs.css';

function Programs() {
  return (
    <div className='container programs' id='programs'>
      <div className='programs__round'></div>
      <h2 className='programs__title'>ДОПОЛНИТЕЛЬНЫЕ ПРОФЕССИОНАЛЬНЫЕ ПРОГРАММЫ</h2>
      <ul className='programs__list'>
        <li className='programs__item'>
          <div className='programs__top programs__one'>
            <div className='programs__tags'>
              <span className='programs__tag'>тим</span>
              <span className='programs__tag'>жизненный цикл</span>
            </div>
            <button className='programs__btn'></button>
          </div>
          <div className='programs__bottom'>
            <p className='programs__text'>Применение технологий информационного моделирования на различных стадиях жизненного цикла автомобильных дорог и объектов транспортной инфраструктуры</p>
          </div>
        </li>
        <li className='programs__item'>
          <div className='programs__top programs__two'>
            <div className='programs__tags'>
              <span className='programs__tag'>итс</span>
              <span className='programs__tag'>внедрение</span>
            </div>
            <button className='programs__btn'></button>
          </div>
          <div className='programs__bottom'>
            <p className='programs__text'>Разработка проектов интеллектуальных транспортных систем: технико-экономическое обоснование и информационное сопровождение на этапе внедрения</p>
          </div>
        </li>
        <li className='programs__item'>
          <div className='programs__top programs__three'>
            <div className='programs__tags'>
              <span className='programs__tag'>мониторинг</span>
              <span className='programs__tag'>беспилотники</span>
            </div>
            <button className='programs__btn'></button>
          </div>
          <div className='programs__bottom'>
            <p className='programs__text'>Мониторинг качества создания объектов дорожной инфраструктуры для беспилотного движения</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Programs; 