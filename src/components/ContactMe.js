import React from 'react';
import styled from 'styled-components';
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactMe() {
  return (
    <StyledContact>
      <h2>Contact Section</h2>
      <ul>
        <li>
          <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=ploflan@gmail.com&su=SUBJECT&body=BODY"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <span class="fa fa-envelope" aria-hidden="true"></span> */}
            <FontAwesomeIcon icon={['fas', 'envelope']} className="fa fa-envelope" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={"https://www.linkedin.com/in/peter-lofland/"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <span class="fa fa-linkedin" aria-hidden="true"></span> */}
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={"https://twitter.com/PeterLofland"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <span class="fa fa-twitter" aria-hidden="true"></span> */}
            <FontAwesomeIcon icon={['fab', 'twitter']} className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={"https://github.com/Plofland"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <span class="fa fa-twitter" aria-hidden="true"></span> */}
            <FontAwesomeIcon icon={['fab', 'github']} className="fa fa-github" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={"https://www.instagram.com/peterlofland/"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="fa fa-instagram" aria-hidden="true"></span>
            <FontAwesomeIcon icon={['fab', 'instagram']} className="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </StyledContact>
  );
}

export default ContactMe;

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
`;
