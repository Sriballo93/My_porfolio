import './About.css';

import React from 'react';
const About = () => {
  return (
    <main className="sr-main-about">
      <section className="sr-1-about">
        <h3 className="sr-q-big">
          Ex-dentist working as a web developer in Madrid, Spain.
        </h3>
        <q className="sr-q-small">
          <i>
            Since 2022, Ive been a web developer. Im passionate about creating innovative
            and functional solutions. When Im not programming, you can find me watching
            football or Formula 1, playing paddle tennis or spending time with my family.
          </i>
        </q>
      </section>

      <section className="sr-a-fotos">
        <div className="sr-a-foto-container">
          <img
            src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681726467/porfolio-sr/a5658630-fb98-4134-b546-7682e21ce3f3_1_fopbis.jpg"
            alt="me"
          />
        </div>
        <div className="sr-a-foto-container">
          <img
            src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681726803/porfolio-sr/8e5b0ea8-4a36-444a-85b7-2c28081b1705_duif2h.jpg"
            alt="mewithchelsea"
          />
        </div>
        <div className="sr-a-foto-container">
          <img
            src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681726508/porfolio-sr/7017a7de-4ecb-4fc4-a23c-fdeefd6d3c67_sszbse.jpg"
            alt="mewithfamily"
          />
        </div>
        <div className="sr-a-foto-container">
          <img
            src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681726479/porfolio-sr/f5081386-8ede-4b1f-8433-f0ed78759d16_uvp2wn.jpg"
            alt="meinformula"
          />
        </div>
        <div className="sr-a-foto-container">
          <img
            src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681726462/porfolio-sr/d3551428-8ef3-439d-b6dd-540d1e88cb68_vf6dmi.jpg"
            alt="meinbeach"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
