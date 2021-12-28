import React from 'react';
import './PageOverlay.css';
import overlay from '../../video/overlay.mp4';

function PageOverlay() {

  return (
    <div className="page-overlay">
      <video className="page-overlay__video" id="background-video" loop autoPlay muted>
          <source src={overlay} type="video/mp4" />
          Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
}

export default PageOverlay; 
