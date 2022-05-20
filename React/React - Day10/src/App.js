import './App.css';
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>React Router Sample</h1>
      <Link to="/invoices">Invoices</Link>
      <Link to="/expenses"> Expenses</Link>

      {/* to render child components */}
      <Outlet />
    </>
  );
}

export default App;