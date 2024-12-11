import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppOlive from './component/olive/AppOlive.jsx';
// import AppAvatar from './component/avatar/AppAvatar.jsx';
// import AppCounter from './component/counter/AppCounter.jsx'
// import AppCounter from './component/counter/AppCounter.jsx';
// import AppBestSeller from './component/yes24/AppBestSeller.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppOlive />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
