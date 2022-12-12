import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MyRoute from './route/route.component';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "./store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MyRoute />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
