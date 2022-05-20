import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext.jsx';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfs0l2MWdacmD8kA7sbTeBTrfYnK9wTpE",
  authDomain: "fitnessreact-fe807.firebaseapp.com",
  projectId: "fitnessreact-fe807",
  storageBucket: "fitnessreact-fe807.appspot.com",
  messagingSenderId: "433762938711",
  appId: "1:433762938711:web:4f7f105985df646f811812",
  measurementId: "G-V4JQXDJKHE"
};
const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,

);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
