import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteManager from './route/route';
import { Provider } from 'react-redux';
import { Store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <RouteManager />
    </React.StrictMode>
  </Provider>
);

