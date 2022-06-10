import React, { createContext, useReducer } from 'react'

export const ProductContext = createContext()

const initialValue = {
  cartItems: []
}
export const ProductContextComponent = (props) => {

  const [state, dispatch] = useReducer(reducerFn, initialValue)

  const providerState = {
    state,
    dispatch
  }
  return (
    <ProductContext.Provider value={providerState}>
      {props.children}
    </ProductContext.Provider>
  )
}

function reducerFn(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    // case 'REMOVE_ITEM':

    default:
      return state
  }
}