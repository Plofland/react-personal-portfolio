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
  // V2.0
  // let sections = document.querySelectorAll('.square');
  let options = {
    // root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1
  };
  // let callback = (entries) => {
  //   entries.forEach((entry) => {
  //     let target = entry.target;
  //     if (entry.isIntersecting) {
  //       target.classList.add('squareAnimation');
  //     } else {
  //       target.classList.remove('squareAnimation');
  //     }
  //   });
  // };
  // let observer = new IntersectionObserver(
  //   callback,
  //   options
  // );
  // sections.forEach((section, index) => {
  //   observer.observe(section);
  // });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log('ENTRIES', { entries });
      entries.forEach((entry) => {
        // console.log("ENTRY",entry)

        // if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0) {
          entry.target.classList.add('sectionAnimation');
        }
      });
    }, options);

    const sections =
      document.querySelectorAll('.homeSection');

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="homeContent">
      <Intro />
      <div className="homeSection">
        <Projects />
      </div>
      <div className="homeSection">
        <Skills />
      </div>
      <div className="homeSection">
        <AboutMe />
      </div>
      <div className="homeSection">
        <Contact />
      </div>
      <div className="homeSection">
        <Logos />
      </div>
    </div>
  );
}
