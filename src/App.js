import React from 'react';
import { hot } from 'react-hot-loader';
import style from './App.scss';

const App = () => <div className={style.hello}>Hello World</div>

export default hot(module)(App);
