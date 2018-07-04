import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import { sizes, pallette } from 'assets/variables';
import { transparentize } from 'polished';
import App from './App';

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
    color: ${pallette.dark.primary};
    &:hover {
      color: ${pallette.white};
      background-color: ${transparentize(0.6, pallette.dark.primary)};
    }
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
