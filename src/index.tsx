import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from './components/Authorization/Authorization';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/contacts' element={<App />} />
          <Route path='/' element={<Authorization />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);