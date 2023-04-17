import './Project.css';

import React from 'react';
import { Link } from 'react-router-dom';
const Project = ({ title, year, tecnology }) => {
  return (
    <div className="sr-project">
      <h3>{title}</h3>
      <span>-</span> <h6>{tecnology}</h6> <span>-</span>
      <h3>{year}</h3>
      <Link className="btn" to={`/work/${title}`}>
        More
      </Link>
    </div>
  );
};

export default Project;
