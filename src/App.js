import React from 'react';
import { hot } from 'react-hot-loader';
import style from './App.scss';

const App = () => <p className={style.hello}>Hello World</p>;

export default hot(module)(App);
