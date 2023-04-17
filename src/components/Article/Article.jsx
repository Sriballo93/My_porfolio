import './Article.css';

import React from 'react';

const Article = ({ icon, text, title }) => {
  return (
    <article className="sr-article">
      <div className="sr-art-title">
        <img className="sr-tech" src={icon} alt="icon-related" />
        <h3>{title}</h3>
      </div>
      <div className="sr-art-p">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Article;
