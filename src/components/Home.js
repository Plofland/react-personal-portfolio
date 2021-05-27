import React, { useEffect } from 'react';

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
    rootMargin: '0px',
    threshold: 0.1
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // console.log('ENTRIES', { entries });
      entries.forEach((entry) => {
        // console.log('ENTRY', entry);
        // console.log('BOTH', entry.target.className);
        if (
          entry.isIntersecting &&
          entry.target.id === 'right'
        ) {
          // console.log(entry.target.id);
          entry.target.classList.add('leftAnimation');
        }
        if (
          entry.isIntersecting &&
          entry.target.id === 'left'
        ) {
          // console.log(entry.target.id);
          entry.target.classList.add('rightAnimation');
        } else {
          if (entry.target.id === 'left') {
            entry.target.classList.remove('leftAnimation');
            console.log('LEFT REMOVED');
          } else {
            entry.target.classList.remove('rightAnimation');
            console.log('RIGHT REMOVED');
          }
        }
      });
    }, options);

    let sections = document.querySelectorAll(
      // '.right' || '.left'
      // '.right'
      '.homeSection'
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="homeContent">
      <Intro />
      <div id="left" className="homeSection">
        <Projects />
      </div>
      <div id="right" className="homeSection">
        <Skills />
      </div>
      <div id="left" className="homeSection">
        <AboutMe />
      </div>
      <div id="right" className="homeSection">
        <Contact />
      </div>
      <div id="left" className="homeSection">
        <Logos />
      </div>
    </div>
  );
}
