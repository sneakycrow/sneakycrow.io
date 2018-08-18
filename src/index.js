/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal } from 'react-emotion';
import { lighten } from 'polished';
import { pallette, spacing } from './components/variables';
import App from './App';

injectGlobal`
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
    font-family: 'Lato', sans-serif;
    font-size: 24px;
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
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
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
  p {
    margin-bottom: ${spacing.xs};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Quicksand', sans-serif;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 32px;
  }
  h4 {
    font-size: 28px;
  }
  h5 {
    font-size: 24px;
  }
  h6 {
    font-size: 20px;
  }
`;

const RootContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  background-color: ${pallette.white};
`;

ReactDOM.render(
  <RootContainer>
    <App />
  </RootContainer>,
  document.getElementById('root')
);
