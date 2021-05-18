import React from 'react';
import '../styles/components/AboutMe.scss';
import bustShot from '../assets/selfBustShot.jpg';

export default function About() {
  return (
    <div className="aboutMeSection" id="aboutMe">
      <div className="sectionTitle">
        <h2>About</h2>
      </div>
      <div className="AboutMeInner">
        <div className="selfDescription">
          <p>
            I worked remotely to collaborate with teams
            produce viable web development projects within
            Lambda School's system. This gave me the chance
            to experience work environments while learning
            web development.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Quis imperdiet massa tincidunt nunc pulvinar
            sapien et. Gravida in fermentum et sollicitudin
            ac orci. Aliquet bibendum enim facilisis gravida
            neque convallis a cras. Blandit libero volutpat
            sed cras ornare arcu dui vivamus arcu. Amet
            mauris commodo quis imperdiet massa tincidunt
            nunc pulvinar.
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
