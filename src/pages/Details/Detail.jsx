import './Detail.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { works } from '../../data/data';

const Detail = () => {
  const { name } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const detailArray = works.filter((work) => work.title === name);
    setDetail(detailArray[0]);
    setLoaded(true);
    return () => {
      setLoaded(false);
      setDetail({});
    };
  }, [name, works]);

  return (
    <main className="sr-main-detail">
      {loaded ? (
        <div className="sr-detail">
          <section className="left-section">
            <h1 className="detail-h3">
              {detail.title}
              <span>-</span> {detail.year}
            </h1>
            <h6>{detail.technologies}</h6>

            <div className="sr-video-container-detail">
              <video className="sr-video-detail" playsInline autoPlay muted loop>
                <source className="sr-video-detail" src={detail.video} type="video/mp4" />
              </video>
            </div>
          </section>
          <section className="right-section">
            <p className="detail-p">{detail.description}</p>
          </section>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </main>
  );
};

export default Detail;
