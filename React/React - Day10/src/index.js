import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoices from './components/Invoices';
import Expenses from './components/Expenses';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/invoices' element={<Invoices />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route index element={<Invoices />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Route>
      <Route path="/dummy" element={<></>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);


function NotFound() {
  return <>Page Not found</>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
