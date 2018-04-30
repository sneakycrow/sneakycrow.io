import React from 'react';
import { hot } from 'react-hot-loader';
import style from './App.scss';

const App = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img
          src="https://crows-nest.nyc3.digitaloceanspaces.com/assets/images/ada.png"
          alt="Sneaky Crow"
        />
      </div>
      <div className={style.title} data-text="Sneaky Crow">
        Sneaky Crow
      </div>
      <div className={style.linksContainer}>
        <a href="mailto:zach@sneakycrow.io">
          <i className="fas fa-paper-plane" />
        </a>
        <a href="https://twitter.com/sneakycr0w">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://github.com/sneakycrow">
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
};

export default hot(module)(App);
