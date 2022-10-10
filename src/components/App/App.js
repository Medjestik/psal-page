import React from 'react';
import './App.css';
import PageOverlay from '../PageOverlay/PageOverlay.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Description from '../Description/Description.js';
import Projects from '../Projects/Projects.js';
import Programs from '../Programs/Programs.js';
import Footer from '../Footer/Footer.js';

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

      <PageOverlay />
      <Header windowWidth={windowWidth} />
      <Main windowWidth={windowWidth} />
      <Description windowWidth={windowWidth} />
      <Projects windowWidth={windowWidth} />
      <Programs />
      <Footer windowWidth={windowWidth} />

    </div>
  );
}

export default App; 
