import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppForm from './component/form/AppForm.jsx';
import AppRouter2 from './component/router2/AppRouter2.jsx';
// import AppAvatar from './component/avatar/AppAvatar.jsx';
// import AppCounter2 from './component/counter2/AppCounter2.jsx'
// import AppAirbnb from './component/airbnb/AppAirbnb.jsx'
// import AppCounter from './component/counter/AppCounter.jsx';
// import AppBestSeller from './component/yes24/AppBestSeller.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
