import React from 'react';
import './Main.css';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

function Main({ windowWidth }) {
  return (
    <main className='container main' id='main'>
      {
        windowWidth > 1023 
        ?
        <>
          <p className='main__subtitle'>программа&nbsp;стратегического академического&nbsp;лидерства</p>
          <h1 className='main__title'>ПРИОРИТЕТ&nbsp;2030</h1>
        </>
        :
        <>
          <p className='main__subtitle'>программа стратегического академического лидерства</p>
          <h1 className='main__title'>ПРИОРИТЕТ 2030</h1>
        </>
      }

      <Marquee gradient={false} speed={120} >
        <span className='main__marquee'>#МЫСОЗДАЕМДВИЖЕНИЕ</span>
        <span className='main__marquee'>РОССИЙСКИЙ УНИВЕРСИТЕТ ТРАНСПОРТА</span>
        <span className='main__marquee'>ПРИОРИТЕТ 2030</span>
        <span className='main__marquee'>ЛИДЕРАМИ СТАНОВЯТСЯ</span>
        <span className='main__marquee'>#МЫСОЗДАЕМДВИЖЕНИЕ</span>
        <span className='main__marquee'>РОССИЙСКИЙ УНИВЕРСИТЕТ ТРАНСПОРТА</span>
        <span className='main__marquee'>ПРИОРИТЕТ 2030</span>
        <span className='main__marquee'>ЛИДЕРАМИ СТАНОВЯТСЯ</span>
      </Marquee>
      {
        windowWidth > 1023 
        ?
        <>
        <NavLink className='main__button' to='/qualification'>Программы повышения квалификации</NavLink>
        <NavLink className='main__button main__button_type_education' to='/education'>Обучение студентов</NavLink>
        {
          /* <Link className='main__arrow' to='description' smooth={true} offset={20} duration= {1000}></Link> */
        }
        </>
        :
        <>
        <NavLink className='main__button' to='/qualification'>Программы повышения квалификации для&nbsp;транспортных образовательных организаций</NavLink>
        <a className='main__button_type_enter' href='https://dpo.emiit.ru/' target='_blank' rel='noreferrer'>Вход на обучение</a>
        {
          /* <Link className='main__arrow' to='project' smooth={true} offset={-100} duration= {1000}></Link> */
        }
        </>
      }

      <div className='main__round'></div>
    </main>
  );
}

export default Main; 