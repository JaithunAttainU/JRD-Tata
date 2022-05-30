import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar'

export default function LayOut() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}
