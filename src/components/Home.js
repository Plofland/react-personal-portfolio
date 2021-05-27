import React from 'react';
import { useEffect } from 'react';

//*Components
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './ContactMe';
import Skills from './Skills';
import Logos from './Logos';

//*Styling
import '../styles/components/Home.scss';

export default function Home() {
  let options = {
    // root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.1
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // console.log('ENTRIES', { entries });
      entries.forEach((entry) => {
        // console.log('ENTRY', entry);

        if (
          entry.isIntersecting &&
          entry.target.className === 'right'
        ) {
          entry.target.classList.add('rightAnimation');
        }
        if (
          entry.isIntersecting &&
          entry.target.className === 'left'
        ) {
          entry.target.classList.add('leftAnimation');
        } else {
          entry.target.classList.remove(
            'leftAnimation' || 'rightAnimation'
          );
        }
      });
    }, options);

    const sections = document.querySelectorAll(
      '.left' || '.right'
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="homeContent">
      <Intro />
      <div className="left">
        <Projects />
      </div>
      <div className="right">
        <Skills />
      </div>
      <div className="left">
        <AboutMe />
      </div>
      <div className="right">
        <Contact />
      </div>
      <div className="left">
        <Logos />
      </div>
    </div>
  );
}
