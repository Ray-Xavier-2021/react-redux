import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import configure store to implement redux store
import { configureStore } from '@reduxjs/toolkit';
// Import Provider to grant access to store
import { Provider } from 'react-redux';
// Import userReducer
import userReducer from './features/user'
import themeReducer from './features/theme'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
