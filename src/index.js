import React from 'react';
import ReactDOM from 'react-dom';
import {
  CandourProvider,
} from 'candour'
import fluid from '@candour/fluid'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './theme/index.css';

const candourTheme = {
  headline: {
    1: {
      fontSize: fluid(40, 60),
      lineHeight: fluid(45, 65),
    },
    2: {
      fontSize: fluid(45, 80),
      lineHeight: fluid(45, 80),
      letterSpacing: '-.015em',
    },
    4: {
      letterSpacing: '.06em',
      fontSize: fluid(14, 16),
      lineHeight: fluid(14, 16),
    },
  },
  text: {
    1: {
      color: '#ccc',
    },
    2: {
      color: '#ccc',
    },
    3: {
      fontSize: fluid(20, 24),
      lineHeight: fluid(23, 33),
      color: '#ccc',
    },
  },
  button: {
    width: fluid(50, 100),
    backgroundColor: '#141414',
  },
}

ReactDOM.render(
  <CandourProvider value={candourTheme}>
    <App />
  </CandourProvider>,
document.getElementById('root'));

registerServiceWorker();
