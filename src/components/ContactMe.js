import React from 'react';
import styled from 'styled-components';
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactMe() {
  return (
    <StyledContact>
      <h2>Get a Hold of Me</h2>
      <StyledIcons>
        <ul>
          <li>
            <a
              href={
                'https://mail.google.com/mail/?view=cm&fs=1&to=ploflan@gmail.com&su=SUBJECT&body=BODY'
              }
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FontAwesomeIcon
                  icon={['fas', 'envelope']}
                  className="fa fa-envelope"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
          <li>
            <a
              href={
                'https://www.linkedin.com/in/peter-lofland/'
              }
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  className="fa fa-linkedin"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
          <li>
            <a href={'https://twitter.com/PeterLofland'}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="fa fa-twitter"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
          <li>
            <a href={'https://github.com/Plofland'}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="fa fa-github"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
          <li>
            <a
              href={
                'https://www.instagram.com/peterlofland/'
              }
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="fa fa-instagram"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
        </ul>
      </StyledIcons>
    </StyledContact>
  );
}

export default ContactMe;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    margin-top: 2rem;
    padding: 1rem;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ul {
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
  }

  ul li {
    position: relative;
    list-style: none;
    width: 4rem;
    height: 4rem;
    margin: 2rem 2rem;
    transform: rotate(-30deg) skew(25deg);
    background: #ccc;
  }

  ul li span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    transition: 0.5s;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 3rem !important;
  }

  //*Icon Stack Hover State
  ul li:hover span:nth-child(5) {
    transform: translate(40px, -40px);
    opacity: 1;
  }
  ul li:hover span:nth-child(4) {
    transform: translate(30px, -30px);
    opacity: 0.8;
  }
  ul li:hover span:nth-child(3) {
    transform: translate(20px, -20px);
    opacity: 0.6;
  }
  ul li:hover span:nth-child(2) {
    transform: translate(10px, -10px);
    opacity: 0.4;
  }
  ul li:hover span:nth-child(1) {
    transform: translate(0, 0);
    opacity: 0.2;
  }

  //*Icon Stack Colors
  ul li:nth-child(1) span {
    background: #de5246;
  }
  ul li:nth-child(2) span {
    background: #0072b1;
  }
  ul li:nth-child(3) span {
    background: #00acee;
  }
  ul li:nth-child(4) span {
    background: #171515;
  }
  ul li:nth-child(5) span {
    background: #3f729b;
  }
`;
