import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { INVOICE, deleteInvoice } from '../mock/invoiceData'
import {isEmpty} from 'lodash'
export default function InvoiceDetails() {
  const params = useParams()
  const navigate = useNavigate()
  const url = useLocation()
  console.log(url)
// console.log(params)
  const invoiceDetails = INVOICE.filter((invoice) => {
    if(invoice.number.toString() === params.invoiceId) {
      return true
    }
    return false
  })
  return (
    <div>
      {!isEmpty(invoiceDetails) ? 
      <>
        <h3>Invoice Details</h3>
        <div>Name: {invoiceDetails[0].name}</div>
        <div>Amount: {invoiceDetails[0].amount}</div>
        <div>Due: {invoiceDetails[0].due}</div>
        <button onClick={() => {
          deleteInvoice(invoiceDetails[0].number)
          navigate("/invoices")
        }}>Delete</button>
      </> : <div>Invalid Invoice ID</div>
      }
    </div>
  )
}
