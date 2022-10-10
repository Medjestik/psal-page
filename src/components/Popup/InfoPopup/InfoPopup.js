import React from 'react';
import './InfoPopup.css';
import Popup from '../Popup.js';

function InfoPopup({ currentProgram, isOpen, onClose }) {

  return (
    <Popup 
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className='popup__form' name='program-info-popup' noValidate>
        <h3 className='popup__title'>{currentProgram.name}</h3>
        <p className='popup__subtitle'>{currentProgram.description}</p>
        <div className='programs__link-container'>
          <a className='programs__link' href='https://forms.yandex.ru/u/6343d6cf9f6bab2789f7429c/' target='_blank' rel='noreferrer'>Подать заявку</a>
        </div>
      </form>
    </Popup>
  )
}

export default InfoPopup;
