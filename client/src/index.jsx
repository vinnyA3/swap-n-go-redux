import React from 'react';
import { render } from 'react-dom';
// App
import App from './components/App';
// Target Element
const targetElement = document.getElementById('app');

render(
  <App />,
  targetElement
);
