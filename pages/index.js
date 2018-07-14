import styled, { hydrate, injectGlobal } from 'react-emotion';
import { lighten } from 'polished';
import Home from './home';
import { pallette, spacing } from '../assets/variables';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  @font-face {
    font-family: 'Quicksand', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Quicksand');
  }
  @font-face {
    font-family: 'Open Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Open+Sans');
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Quicksand', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: ${lighten(0.3, pallette.gray)};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    opacity: 0.75;
    padding: ${spacing.sm};
    transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    &:hover {
      color: ${pallette.green};
      opacity: 1;
    }
  }
  small {
    font-size: 0.65em;
  }
`;

const RootContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  background-color: ${pallette.white};
`;

const App = () => (
  <RootContainer>
    <Home />
  </RootContainer>
);

export default App;
