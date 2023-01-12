import React from 'react';
import './Education.css';
import { NavLink } from 'react-router-dom';
import logoColor from '../../images/logo-color.svg';
import { course } from '../../utils/vo.js';
import InfoPopup from '../Popup/InfoPopup/InfoPopup.js';

function Education({ windowWidth }) { 

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

  console.log(windowWidth)

  return (
    <>
    <div className='container qualification'>

      <div className='qualification__header'>
        <img className='header__logo' src={logoColor} alt='логотип'></img>
        {
          windowWidth > 1023 &&
          <NavLink className='header__btn-enter' to='/'>На главную</NavLink>
        }
      </div>

      <h2 className='qualification__title'>Онлайн-курсы</h2>
      <p className='qualification__subtitle'>Российским университетом транспорта разработаны онлайн-курсы для обучения студентов</p>

      <h3 className='qualification__title'>Перечень курсов:</h3>

      <ul className='programs__list qualification__list'>
        {
          course.map((elem) => (
            <li className='programs__item' key={elem.id}>
              <div className={`programs__top programs__top_type_${elem.id}`}>
                <div className='programs__tags'>
                  {
                    elem.tags.map((tag, i) =>(
                      <span key={i} className='programs__tag'>{tag}</span>
                    ))
                  }
                  <span className='programs__tag programs__tag_type_hours'>{elem.hours} ч.</span>
                </div>
                {
                  elem.active
                  ?
                  <div className='programs__btn' onClick={() => programInfo(elem)}></div>
                  :
                  <div className='programs__btn programs__btn_type_block'></div>
                }
              </div>
              <div className='programs__bottom'>
                <p className='programs__text'>{elem.name}</p>
                <p className='programs__date'>{elem.date}</p>
              </div>
            </li>
          ))
        }
      </ul>

      {
        isInfoPopupOpen &&
        <InfoPopup
          currentProgram={currentProgram}
          isOpen={isInfoPopupOpen}
          onClose={closeInfoPopup}
        />
      }

    </div>
    <div className='footer qualification__footer'>
      <p className='footer__copy'>&copy; 2022 "Российский университет транспорта"</p>
    </div>
    </>
  )
}

export default Education;