import React from 'react';
import { render } from 'react-dom';
import App from './App';

if (!document.getElementById('material-ui-fonts-link')) {
  const link = document.createElement('link');
  link.id = 'material-ui-fonts-link';
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
  document.head.appendChild(link);
}

render(<App />, document.getElementById('root'));
