import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import '../global.scss';
import App from './component/app/app';
import { AppContextProvider } from './context/app.context.provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
