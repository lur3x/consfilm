import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/themes/styles.scss';
import './assets/fonts/Poppins-Regular.ttf';
import './assets/fonts/Lora-Regular.ttf';
import App from './Layout/AppMain';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/main components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
