import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import PageOverlay from '../PageOverlay/PageOverlay.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Description from '../Description/Description.js';
import Projects from '../Projects/Projects.js';
import Programs from '../Programs/Programs.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import * as api from '../../utils/api.js';

function App() {

  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);


  function handleLogin (data) {
    /*<Redirect to={'http://dpo.emiit.ru/'} />
    const action = 'login';
    api.login({ action, data })
      .then((res) => {
        console.log(res);
        
        //localStorage.setItem("token", res.token);
        //tokenCheck();
      })
      .catch((err) => {
        console.log(err);
        setLoginError(true);
      })
      .finally(() => {

      });*/
  }

  function openLoginPopup() {
    setIsLoginPopupOpen(true);
  }

  function closeLoginPopup() {
    setIsLoginPopupOpen(false);
  }

  return (
    <div className="page">
      <PageOverlay />
      <Header onLogin={openLoginPopup} />
      <Main />
      <Description />
      <Projects onLogin={openLoginPopup} />
      <Programs />
      <Footer />

      {
        isLoginPopupOpen &&
        <Login isOpen={isLoginPopupOpen} onClose={closeLoginPopup} onLogin={handleLogin} loginError={loginError} setLoginError={setLoginError} />
      }
    </div>
  );
}

export default App; 
