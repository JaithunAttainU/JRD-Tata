import React from 'react'
import { Outlet, Link, NavLink, Navigate } from 'react-router-dom'
import { INVOICE, getInvoices } from '../mock/invoiceData'

export default function Invoices(props) {
  console.log(props.name)
  return (
    <div className='d-flex'>
    <div>{getInvoices().map((invoice) => {
      return (
        <NavLink key={invoice.number} style={(prop) => {
            const {isActive} = prop
            return {
              backgroundColor: isActive ?'yellow' : '',
              display: 'flex'
            }
        }} to={`/invoices/${invoice.number}`}>
          {invoice.name}
          
        </NavLink>
      )
    })}</div>
    {/* {props.name === 'Subhash' ? <Navigate to=""></Navigate>: null} */}
    <Outlet/>
    </div>
  )
}
