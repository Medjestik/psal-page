import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageOverlay from '../PageOverlay/PageOverlay.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Description from '../Description/Description.js';
import Projects from '../Projects/Projects.js';
import Programs from '../Programs/Programs.js';
import Courses from '../Courses/Courses.js';
import Footer from '../Footer/Footer.js';
import Qualification from '../Qualification/Qualification.js';
import Education from '../Education/Education.js';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    function resizeWindow (evt) {
      setWindowWidth(evt.target.innerWidth);
    }
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, []);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  return (
    <div className='page'>
      <Routes>

        <Route exact path='/' element={
          <>
          <PageOverlay />
          <Header windowWidth={windowWidth} />
          <Main windowWidth={windowWidth} />
          <Description windowWidth={windowWidth} />
          <Projects windowWidth={windowWidth} />
          <Programs />
          <Courses />
          <Footer windowWidth={windowWidth} /> 
          </>
        }/>

        <Route exact path='/qualification' element={
          <>
          <Qualification windowWidth={windowWidth} />
          </>
        }/>

        <Route exact path='/education' element={
          <>
          <Education windowWidth={windowWidth} />
          </>
        }/>

      </Routes>

    </div>
  );
}

export default App; 
