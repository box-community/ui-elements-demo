//import React from 'react';
//import * as React from 'react'
//import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';

import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import Explorer from './Explorer';
//const access_token = 'UlS110AAtX3Om7hPyPhI0Mg4susjZZod';

const container = document.getElementById('root');
render(<App />, container);

//const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render(
//  <React.StrictMode>
//    <Main token={access_token}/>
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
