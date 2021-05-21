import React from 'react';
import '../styles/components/AboutMe.scss';
import bustShot from '../assets/selfBustShot.jpg';

export default function About() {
  return (
    <div className="aboutMe section">
      <div className="sectionTitle">
        <h2>About</h2>
      </div>
      <div className="AboutMeInner">
        <div className="selfDescription">
          <p>
            I worked remotely to collaborate with teams to
            produce viable web development projects within
            Lambda School's system. This gave me the chance
            to experience work environments while learning
            web development tools and technology.
          </p>
          <p>
            I enjoy overcoming obstacles and seeing a project from conception to deployment. I'm capable of working on both the front and back end but I have an affinity for UI/UX design. I always love learning anything about software engineering whether it's a tool, framework, workflow enhancement or a new language. I particularly relish working in a group but am adept at working independently to find my own solutions.
          </p>
          <p>
            <u>Life outside of code:</u><p> On my free time I love cooking, camping, hiking, backpacking, photography or spending the entire day at the beach.</p>
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
