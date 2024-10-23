import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section className='max-h-screen flex justify-center items-center'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </section>
);
