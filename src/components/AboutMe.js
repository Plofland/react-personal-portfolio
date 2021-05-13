import React from 'react';
import '../styles/components/AboutMe.scss';
import bustShot from '../assets/selfBustShot.jpg';

export default function About() {
  return (
    <div className="aboutMe">
      <div className="hello">
        <h1>Hi there, I'm Peter</h1>
        <h4>FULL STACK WEB DEVELOPER</h4>
      </div>
      <div id="image">
        <img src={bustShot} alt="Peter Lofland bust shot" />
      </div>

      <div className="selfDescription">
        <p>
          I love coding to solve problems and designing out
          websites.
        </p>
        <p>
          I worked remotely to collaborate with teams
          produce viable web development projects within
          Lambda School's system. This gave me the chance to
          experience work environments while learning web
          development.
        </p>
      </div>
    </div>
  );
}
