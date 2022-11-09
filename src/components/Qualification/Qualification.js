import React from 'react';
import './Qualification.css';
import { NavLink } from 'react-router-dom';
import logoColor from '../../images/logo-color.svg';
import { qualificationPrograms } from '../../utils/dpo.js';
import InfoPopup from '../Popup/InfoPopup/InfoPopup.js';
import onlineImg from '../../images/info-online.png';
import moneyImg from '../../images/info-money.png';
import diplomaImg from '../../images/info-diploma.png';

function Qualification({ windowWidth }) { 

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

      <h2 className='qualification__title'>Программы повышения квалификации для&nbsp;транспортных образовательных организаций</h2>
      <p className='qualification__subtitle'>Российским университетом транспорта разработаны программы повышения квалификации профессорско-преподавательского состава и других категорий работников транспортных образовательных организаций</p>

      <h3 className='qualification__title'>Перечень программ:</h3>

      <ul className='programs__list qualification__list'>
        {
          qualificationPrograms.map((elem) => (
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
                <div className={`programs__btn ${elem.active ? '' : 'programs__btn_type_block'}`} onClick={() => programInfo(elem)}></div>
              </div>
              <div className='programs__bottom'>
                <p className='programs__text'>{elem.name}</p>
                <p className='programs__date'>{elem.date}</p>
              </div>
            </li>
          ))
        }
      </ul>

      <h3 className='qualification__title'>Информация для слушателей:</h3>
      <div className='qualification__info'>
        <div className='qualification__info-top'>
          <ul className='qualification__info-list'>
            <li className='qualification__info-item'>
              <img className='qualification__info-img' src={onlineImg} alt=''></img>
              <p className='qualification__info-text'>При реализации всех приведенных в перечне программ применяется заочная форма обучения с применением электронного обучения и дистанционных образовательных технологий.</p>
            </li>
            <li className='qualification__info-item'>
              <img className='qualification__info-img' src={moneyImg} alt=''></img>
              <p className='qualification__info-text'>Обучение по указанным программам проводится при поддержке Российской академии транспорта на безвозмездной основе.</p>
            </li>
            <li className='qualification__info-item'>
              <img className='qualification__info-img' src={diplomaImg} alt=''></img>
              <p className='qualification__info-text'>Работникам транспортных образовательных организаций, успешно освоившим программу и прошедшим итоговую аттестацию, будет выдано удостоверение о повышении квалификации установленного образца.</p>
            </li>
          </ul>
          <div className='qualification__info-separate'></div>
          <div className='qualification__info-request'>
            <p className='qualification__info-text'>Для обучения профессорско-преподавательского состава и других категорий работников транспортных образовательных организаций по предлагаемым программам необходимо до 31 октября 2022 года централизованно от образовательной организации заполнить заявку на обучение.</p>
            <a className='qualification__info-request-btn' href='https://forms.yandex.ru/u/6343d6cf9f6bab2789f7429c/' target='_blank' rel='noreferrer'>Подать заявку</a>
            <p className='qualification__info-text qualification__info-text_type_margin-top qualification__info-text_type_contact'>Контактное лицо в Российском университете транспорта – Петрова Лариса Вячеславовна.</p>
            <p className='qualification__info-text qualification__info-text_type_margin-top qualification__info-text_type_contact'>Телефон: +7(499)262-93-26 или +7(903)016-06-15</p>
            <p className='qualification__info-text qualification__info-text_type_margin-top qualification__info-text_type_contact'>Электронная почта – plv@raps.edu.ru</p>
          </div>
        </div>

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
    <div className='footer qualification__footer'>
      <p className='footer__copy'>&copy; 2022 "Российский университет транспорта"</p>
    </div>
    </>
  )
}

export default Qualification;