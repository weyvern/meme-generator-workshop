import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MemeState from './context/memeContext';

ReactDOM.render(
  <React.StrictMode>
    <MemeState>
      <App />
    </MemeState>
  </React.StrictMode>,
  document.getElementById('root')
);
