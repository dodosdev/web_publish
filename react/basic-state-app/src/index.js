import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppForm from './component/form/AppForm.jsx';
// import AppAirbnb from './component/airbnb/AppAirbnb.jsx';
// import AppAladin2 from './component/aladin2/AppAladin2.jsx';
// import AppAvatar from './component/avatar/AppAvatar.jsx';
// import AppCounter2 from './component/counter2/AppCounter2.jsx'
// import AppAirbnb from './component/airbnb/AppAirbnb.jsx'
// import AppCounter from './component/counter/AppCounter.jsx';
// import AppBestSeller from './component/yes24/AppBestSeller.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppCounter2 /> */}
    {/* <AppAvatar /> */}
    {/* <AppAladin2 /> */}
    <AppForm />
    {/* <AppAirbnb /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
