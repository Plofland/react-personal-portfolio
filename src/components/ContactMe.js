import React from 'react';
import '../styles/components/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactMe() {
  return (
    <div className="contactMe">
      <h2>Get in Contact</h2>
      <div className="socialIcons">
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
      </div>
    </div>
  );
}

export default ContactMe;
