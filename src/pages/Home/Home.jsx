import React, { useRef } from 'react';
import './Home.css';
import Works from '../../components/Work/Works';

const Home = () => {
  const latestWorkRef = useRef(null);

  const handleClick = () => {
    latestWorkRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="sr-main-home">
      <div className="sr-name-container">
        <h1>SEBASTIAN RIBALLO</h1>
        <h5>Jr. Fullstack Developer</h5>
        <p>A coding maestro who crafts clean, elegant, and efficient code.</p>
        <button className="scrolldown" onClick={handleClick}>
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </button>
      </div>
      <div className="sr-latest-work" ref={latestWorkRef}>
        <h3>Some of my latest work</h3>
        <div className="sr-works-container">
          <Works
            title={'Activibe website'}
            video={
              'https://res.cloudinary.com/dg2xjawnt/video/upload/so_10/v1681579743/porfolio-sr/activibe_2_cevmzm.mp4'
            }
            info={'Full Mern Stack Website. Final project'}
          />
          <Works
            title={'CMS motorsbike website'}
            video={
              'https://res.cloudinary.com/dg2xjawnt/video/upload/so_10/v1681580214/porfolio-sr/cms_motor__1__bk2yfu.mp4'
            }
            info={'React. First frontend steps '}
          />{' '}
          <Works
            title={'Harry Potter website replica'}
            video={
              'https://res.cloudinary.com/dg2xjawnt/video/upload/v1681573845/porfolio-sr/Harry_Potter_Fan_Page_-_Google_Chrome_2023-02-21_16-35-55_qfxo2x.mp4'
            }
            info={'HTML,CSS and JS, first steps'}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
