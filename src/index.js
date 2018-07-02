import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './components/App';

injectGlobal`
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
