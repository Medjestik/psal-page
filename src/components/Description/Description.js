import React from 'react';
import './Description.css';
import imgFirst from '../../images/description-1.svg';
import imgSecond from '../../images/description-2.svg';

function Description() {
  return (
    <div className='description' id='description'>
      <div className='description__section'>
        <img className='description__img-first' src={imgFirst} alt='картинка'></img>
        <div className='description__overlay-first'></div>
      </div>
      <div className='description__section'>
        <img className='description__img-second' src={imgSecond} alt='картинка'></img>
        <div className='description__overlay-second'></div>
      </div>
    </div>
  );
}

export default Description;