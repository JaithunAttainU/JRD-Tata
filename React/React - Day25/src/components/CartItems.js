import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'


function CartItems() {

  const contextData = useContext(ProductContext)
  return (
    <>
      <h2>Cart Items</h2>
      {contextData.state.cartItems.map(item => {
        return <p>{item.title}</p>
      })}
    </>
  )
}

export default CartItems