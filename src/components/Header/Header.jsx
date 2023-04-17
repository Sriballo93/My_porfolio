import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="sr-navbar-complete">
        <div className="sr-logo-section">
          <NavLink to="/">
            <img
              className="sr-logo"
              src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681473491/porfolio-sr/DevSas_copy_odsipp.png"
              alt="logoDevSas"
            />
          </NavLink>
        </div>
        <ul className="sr-navbar">
          <li>
            <NavLink to="/expertise">expertise</NavLink>
          </li>
          <li>
            <NavLink to="/work">work</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
        <ul className="sr-navbar-social">
          <li>
            <a
              href="https://www.linkedin.com/in/sebastian-riballo-herrera-a862b5180/"
              rel="noreferrer"
              target="blank"
            >
              <img
                className="sr-logo-social"
                src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/linkedin_wji7hg.png"
                alt="logoLinked"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/devsas.jsx/"
              rel="noreferrer"
              target="blank"
            >
              <img
                className="sr-logo-social"
                src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1681420191/My-Porfolio/87390_bdzitb.png"
                alt="logoInstagram"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dev_srh" rel="noreferrer" target="blank">
              <img
                className="sr-logo-social"
                src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/twitter_jftjzi.png"
                alt="logoTwiter"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Sriballo93" rel="noreferrer" target="blank">
              <img
                className="sr-logo-social"
                src="https://res.cloudinary.com/dg2xjawnt/image/upload/v1675094153/My-Porfolio/github_imanj1.png"
                alt="logogithub"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
