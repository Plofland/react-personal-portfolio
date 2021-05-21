import React from 'react';
import '../styles/components/Footer.scss';

export default function Footer() {
  return (
    <div id="footer">
      <div className="attribute">
        <p>Graphic image belongs to Marina Rakhimova</p>
        <a
          href="https://dribbble.com/MarinaMakoto"
          target="_blank"
          rel="noreferrer"
        >
          <p>Find more of her work here</p>
        </a>
      </div>
      <div className="attribute">
        <p>
          Palm Leaf Tropical Background belongs to Юлия
          Гапеенко
        </p>
        <a
          href="https://www.vecteezy.com/members/yganko"
          target="_blank"
          rel="noreferrer"
        >
          <p>Find more of their work here</p>
        </a>
      </div>
    </div>
  );
}
