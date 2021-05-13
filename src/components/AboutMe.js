import React from 'react';
import '../styles/components/AboutMe.scss';
import bustShot from '../assets/selfBustShot.jpg';

export default function About() {
  return (
    <div className="aboutMe">
      <div className="sectionTitle">
        <h2>About</h2>
      </div>
      <div className="innerAboutMe">
        <div className="selfDescription">
          <p>
            I love coding to solve problems and designing
            out websites.
          </p>
          <p>
            I worked remotely to collaborate with teams
            produce viable web development projects within
            Lambda School's system. This gave me the chance
            to experience work environments while learning
            web development.
          </p>
        </div>
        <div id="image">
          <img
            src={bustShot}
            alt="Peter Lofland bust shot"
          />
        </div>
      </div>
    </div>
  );
}
