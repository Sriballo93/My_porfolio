import './Expertise.css';

import React from 'react';

import Article from '../../components/Article/Article';
const Expertise = () => {
  return (
    <main className="sr-main-exper">
      <div className="sr-exp-container">
        <h1>.myExpertise</h1>
        <div className="sr-exp-section">
          <Article
            icon="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681496212/porfolio-sr/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBkPSJNMTgsMzQuMTExbC0xLjY2Nyw2LjY2N0wxNC4xMTEsNDNIMzEuODg5bC0yLjIyMi0yLjIyMkwyOCw_s7we13.svg"
            title="Software Development"
            text="Proficient in both functional and object-oriented programming paradigms, I have some experience working with JavaScript, and soon with TypeScript."
          />
          <Article
            icon="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681497758/My-Porfolio/mern_zbbi8t.png"
            title="Jr. Fullstack Dev."
            text=" I am well-versed in the MERN stack, which includes MongoDB, Express, React, and Node.js. This has allowed me to work as a full-stack developer and create robust and scalable software solutions from front-end to back-end. "
          />
          <Article
            icon="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681501139/porfolio-sr/0_iKwwEO0btKL3brZn_bdp78g.png"
            title="Coming Soon"
            text="As a developer, I am always looking to expand my skill set and stay up-to-date with the latest technologies. In my quest to stay ahead of the curve, I have decided to learn Angular, TypeScript, and .NET. "
          />
        </div>
      </div>
    </main>
  );
};

export default Expertise;
