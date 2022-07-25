import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { HashRouter } from 'react-router-dom'

library.add(fab, faTrash, faPenToSquare);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
