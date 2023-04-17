import './Work.css';

import React from 'react';
const Works = ({ info, title, video }) => {
  return (
    <article className="sr-work-video">
      <div className="sr-video-container">
        <video className="sr-video" playsInline autoPlay muted loop>
          <source className="sr-video" src={video} type="video/mp4" />
        </video>
      </div>
      <h5>{title}</h5>
      <p>{info}</p>
    </article>
  );
};

export default Works;
