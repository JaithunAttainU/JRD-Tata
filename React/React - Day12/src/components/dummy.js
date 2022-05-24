import React from 'react'
import { useSelector } from 'react-redux'

export default function Dummy() {

  const data = useSelector((state) => state.updateCounter)

  console.log("dummy ", data)
  return (
    <div>dummy</div>
  )
}
