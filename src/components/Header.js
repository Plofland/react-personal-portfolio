import React from 'react';
import '../styles/components/Header.scss';
import monstera from '../assets/monsteraBackground.jpg';
import monstera1440 from '../assets/monsteraBackground1440.jpg';
import monstera900 from '../assets/monsteraBackground900.jpg';
import monstera414 from '../assets/monsteraBackground414.jpg';

export default function Header() {
  return (
    <div className="headerSection">
      {window.innerWidth <= 414 ? (
        <img
          src={monstera414}
          alt="monstera plant banner mobile"
        />
      ) : window.innerWidth <= 900 ? (
        <img
          src={monstera900}
          alt="monstera plant banner tablet"
        />
      ) : window.innerWidth <= 1440 ? (
        <img
          src={monstera1440}
          alt="monstera plant banner Macbook"
        />
      ) : (
        <img
          src={monstera}
          alt="monstera plant banner desktop"
        />
      )}

      <a
        href="https://www.linkedin.com/in/peter-lofland/"
        target="_blank"
        rel="noreferrer"
      >
        <h1>Peter Lofland</h1>
      </a>
    </div>
  );
}
