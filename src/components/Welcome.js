import React from 'react';
import styled from 'styled-components';

export default function Welcome() {
  return (
    <styledWelcome className="textEffect">
      <h1 className="neon" data-text="Neon">
        Welcome
      </h1>
      <div className="gradient"></div>
      <div className="spotlight"></div>
    </styledWelcome>
  );
}

// ~~~Welcome Neon Sign~~~

const styledWelcome = styled.div`
  /* $color1: red;
  $color2: blue;

  .textEffect {
    overflow: hidden;
    position: relative; */

    /* This bumps up the colors to make the neop pop */
    /* filter: contrast(110%) brightness(190%); */
  }

  /* .neon { */
    /* position: relative; */

    /* apparently, this only works on a black background. Play around with this to see if I can do anything other than a plain black background */
    /* background: black; */

    /* The text inside the header is ignored and it is the text inside the data-text that actally matters, see line 7 */
    /* color: transparent; */

    /* &::before,
    &::after { */
      /* Adding 2 copies of the text on their own layer */
      /* content: attr(data-text); */

      /* Start them off as white so we can paint them later */
      /* color: white; */

      /* blur it to creat the neon glow effect */
      /* filter: blur(0.01em);

      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;

      &::after { */
        /* set the top copy to difference. This creates the knock-out effect with a bit of glow */
        /* mix-blend-mode: difference; */
      }
    }
  }

  /* position our 2 effect layers */
  /* .gradient,
  .spotlight {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;
    z-index: 10;
  } */

  /* add the colors */
  /* .gradient {
    background: linear-gradient(45deg, $color1, $color2); */

    /* multiply mode will paint only the white text */
    /* mix-blend-mode: multiply;
  }

  .spotlight {
    animation: light 10s infinite linear; */

    /* these are the lights, color-dodge needs a black background for optimum effect */
    /* background:
      radial-gradient(circle, white, transparent 25%) 0 0 / 25% 25%;
      radial-gradient(circle, white, black 25%) 50% 50% / 12.5% 12.5%;
    top: -100%;
    left: -100%; */

    /* color dodge gives the lights that shimmer effect */
    /* mix-blend-mode: color-dodge;
  }

  @keyframes light {
    100% {
      transform: translate3d(50%, 50%, 0);
    }
  } */
  
  /* Pen Styling */

  /* style text */
  /* .neon {
    font: 700 4rem 'Lato', 'sans-serif';
    text-transform: uppercase;
    text-align: center;
    margin: 0;

    &:focus {
      outline: none;
      border: 1px solid white;
    }
  } */
`;
