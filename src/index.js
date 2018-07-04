import React from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal } from 'react-emotion';
import { sizes, pallette } from 'assets/variables';
import { transparentize } from 'polished';
import App from './App';

const { dark } = pallette;
const Container = styled('div')`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: ${dark.base};
  flex-direction: column;
  color: ${dark.variant2};
`;

injectGlobal`
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: ${sizes.font};
    color: ${pallette.dark.variant1};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${pallette.white};
    background-color: ${transparentize(0.6, pallette.dark.primary)};
    transition: background-color 0.15s ease-in-out;
    &:hover, &:focus, &:active {
      background-color: ${transparentize(0.5, pallette.dark.primary)};
    }
  }
`;

ReactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById('root')
);
