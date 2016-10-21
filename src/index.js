import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MortgageApp from './MortgageApp'
import './index.css';
import '../public/leaflet.js'

ReactDOM.render(
  <MortgageApp />,
  document.getElementById('root')
);
