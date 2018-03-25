import React from 'react';
import { hot } from 'react-hot-loader';
import style from './App.scss';

const App = () => (
  <div className={style.container}>
    <div className={style.logo}>
      <img
        src="https://crows-nest.nyc3.digitaloceanspaces.com/assets/images/ada.png"
        alt="Sneaky Crow"
      />
    </div>
    <div className={style.mainItem} data-text="Sneaky Crow">
      Sneaky Crow
    </div>
    <div>
      <h1>Coming Soon</h1>
      <a href="mailto:zach@sneakycrow.io">zach@sneakycrow.io</a>
    </div>
  </div>
);

export default hot(module)(App);
