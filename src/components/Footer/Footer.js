import React from 'react';
import './Footer.css';
import footerLogo from '../../images/logo.svg';
import { Link } from 'react-scroll';

function Footer({ windowWidth }) {
  return (
    <>
    {

      <footer className='container footer'>
        <div className='footer__container'>
          <img className='footer__logo' src={footerLogo} alt='логотип'></img>
          <div className='footer__column'>
            <h4 className='footer__title'>Навигация</h4>
            <Link className='footer__link' to='main' smooth={true} offset={0} duration= {2000}>главная</Link>
            {
              windowWidth > 1023 &&
              <Link className='footer__link' to='description' smooth={true} offset={20} duration= {1500}>рут</Link>
            }
          </div>
          <div className='footer__column'>
            {
              windowWidth > 1023 &&
              <div className='footer__title'></div>
            }
            <Link className='footer__link' to='projects' smooth={true} offset={-80} duration= {1000}>проекты</Link>
            <Link className='footer__link' to='programs' smooth={true} offset={-80} duration= {500}>дпп</Link>
          </div>
          <div className='footer__column footer__column_type_large'>
            <h4 className='footer__title'>Ресурсы</h4>
            <a className='footer__link' href='https://miit-ief.ru/' target='_blank' rel='noreferrer'>институт экономики и финансов</a>
            <a className='footer__link' href='https://www.miit.ru/' target='_blank' rel='noreferrer'>РУТ (МИИТ)</a>
          </div>
        </div>
        <p className='footer__copy'>&copy; 2021 "Российский университет транспорта"</p>
      </footer>
    }
    </>
  );
}

export default Footer; 