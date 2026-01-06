import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ScrollToTop } from './components/scroll_to_top';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const basename = process.env.PUBLIC_URL && process.env.PUBLIC_URL !== "." ? process.env.PUBLIC_URL : undefined;

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
