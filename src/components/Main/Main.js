import React from 'react';
import './Main.css';
import Marquee from "react-fast-marquee";
import { Link } from 'react-scroll';

function Main() {
  return (
    <main className='container main' id='main'>
      <p className='main__subtitle'>программа&nbsp;стратегического академического&nbsp;лидерства</p>
      <h1 className='main__title'>ПРИОРИТЕТ&nbsp;2030</h1>
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
      <Link className='main__arrow' to='description' smooth={true} offset={20} duration= {1000}></Link>
      <div className='main__round'></div>
    </main>
  );
}

export default Main; 