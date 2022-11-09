import React from 'react';
import './Programs.css';
import { programs } from '../../utils/dpo.js';
import InfoPopup from '../Popup/InfoPopup/InfoPopup.js';

function Programs() {

  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [currentProgram, setCurrentProgram] = React.useState({});

  function programInfo(program) {
    setCurrentProgram(program);
    setIsInfoPopupOpen(true);
  }

  function closeInfoPopup() {
    setIsInfoPopupOpen(false);
  }

  React.useEffect(() => {
    return(() => {
      setCurrentProgram({});
    })
  }, []);

  return (
    <div className='container programs' id='programs'>
      <div className='programs__round'></div>
      <h2 className='programs__title'>ДОПОЛНИТЕЛЬНЫЕ ПРОФЕССИОНАЛЬНЫЕ ПРОГРАММЫ</h2>

      <ul className='programs__list'>
      {
        programs.map((elem) => (
          <li className='programs__item' key={elem.id}>
            <div className={`programs__top programs__top_type_${elem.id}`}>
              <div className='programs__tags'>
                {
                  elem.tags.map((tag, i) =>(
                    <span key={i} className='programs__tag'>{tag}</span>
                  ))
                }
              </div>
              <div className={`programs__btn ${elem.active ? '' : 'programs__btn_type_block'}`}></div>
            </div>
            <div className='programs__bottom'>
              <p className='programs__text'>{elem.name}</p>
            </div>
          </li>
        ))
      }
      </ul>

      <div className='programs__link-container'>
        <a className='programs__link' href='https://forms.yandex.ru/u/6343d6cf9f6bab2789f7429c/' target='_blank' rel='noreferrer'>Подать заявку на обучение</a>
      </div>

      {
        isInfoPopupOpen &&
        <InfoPopup
          currentProgram={currentProgram}
          isOpen={isInfoPopupOpen}
          onClose={closeInfoPopup}
        />
      }

    </div>
  );
}

export default Programs; 