import React from 'react';
import './Courses.css';
import { course } from '../../utils/vo.js';
import InfoPopup from '../Popup/InfoPopup/InfoPopup.js';

function Courses() { 

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
    <>
    <div className='container course' id='courses'>

      <div className='course__round'></div>
      <h2 className='course__title'>ONLINE-КУРСЫ ДЛЯ&nbsp;СТУДЕНТОВ</h2>

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
                <span className='programs__more'>Подробнее &#8594;</span>
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
    </>
  )
}

export default Courses;