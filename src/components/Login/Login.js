import React from 'react';
import './Login.css';
import Popup from '../Popup/Popup.js';

function Login({ onLogin, loginError, setLoginError, isOpen, onClose }) {

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [blockSubmitButton, setBlockSubmitButton] = React.useState(true);
  const [errorLogin, setErrorLogin] = React.useState({});
  const [errorPassword, setErrorPassword] = React.useState({});

  const errorForm = errorLogin.error || errorPassword.error || login.length < 1 || password.length < 1;

  function handleSubmit(e) {
    e.preventDefault();
    const data = { login: login, password: password };
    onLogin(data);
  }

  function handleChangeLogin(e) {
    setLogin(e.target.value);
    setLoginError(false);
    if (e.target.checkValidity()) {
      setErrorLogin({
        errorText: '',
        error: false
      });
    }
    else {
      setErrorLogin({
        errorText: 'Логин должен содержать более 6 символов',
        error: true
      });
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    setLoginError(false);
    if (e.target.checkValidity()) {
      setErrorPassword({
        errorText: '',
        error: false
      });
    }
    else {
      setErrorPassword({
        errorText: 'Пароль должен содержать более 6 символов',
        error: true
      });
    }  
  }

  React.useEffect(() => {
    setLogin('');
    setPassword('');
    setBlockSubmitButton(true);
    setLoginError(false);
    setErrorLogin({
      errorText: '',
      error: false
    });
    setErrorPassword({
      errorText: '',
      error: false
    });
    // eslint-disable-next-line
  }, [isOpen]);

  React.useEffect(() => {
    if (!errorForm) {
      setBlockSubmitButton(false);
    } else {
      setBlockSubmitButton(true);
    }
  }, [errorForm]);


  return (
    <Popup 
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className="popup__form" name="login-form" noValidate onSubmit={handleSubmit}>
        <h3 className="popup__title">Для входа на портал обучения введите полученные логин и&nbsp;пароль и&nbsp;нажмите кнопку &laquo;Войти&raquo;.</h3>
        <div className="popup__form-line">
          <input 
            className="popup__input"
            placeholder="Введите логин"
            minLength="6"
            type="text" 
            id="login"
            name="login" 
            value={login}
            onChange={handleChangeLogin}
            required
          >
          </input>
          <span className={`popup__input-error ${errorLogin.error ? "popup__input-error_active" : ""}`}>
            {errorLogin.errorText}
          </span>
        </div>
        <div className="popup__form-line">
          <input 
            className="popup__input"
            placeholder="Введите пароль"
            minLength="6"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            required
          >
          </input>
          <span className={`popup__input-error ${errorPassword.error ? "popup__input-error_active" : ""}`}>
            {errorPassword.errorText}
          </span>
        </div>
        <div className="popup__submit">
          <span className={`popup__submit-error ${loginError ? "popup__submit-error_type_show" : "popup__submit-error_type_hide"}`}>
            Неправильный логин или пароль
          </span>
          <button 
            className={`popup__submit-button ${blockSubmitButton ? "popup__submit-button_type_block" : ""}`} 
            type="submit"
          >
            Войти
          </button>
        </div>
        <p className="login__forgot-password"></p>
      </form>
      
    </Popup>
  )
}

export default Login;