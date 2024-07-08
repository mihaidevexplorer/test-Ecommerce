// main.jsx fost index.js in react reate
//import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './store/index';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    <Toaster
      toastOptions={{
        position : 'top-right',
        style : {
          background : '#283046',
          color : 'white'
        }
      }} 
    />
    </Provider>
  </BrowserRouter>
);




