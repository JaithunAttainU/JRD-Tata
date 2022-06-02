import React from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../Loader'
import Navbar from '../NavBar'

export default function LayOut() {
  return (
    <div>
      <Loader />
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}
