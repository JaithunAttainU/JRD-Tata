import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

function Table(props) {

  const contextData = useContext(ProductContext)

  return (
    <table>
      <thead>
        <tr>
          <td>Thumbnail</td>
          <td>Name</td>
          <td>Price</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.rows.map(row => {

          return (
            <tr key={row.id}>
              <td><img src={row.image} width={80} height="auto" /></td>
              <td>{row.title}</td>
              <td>{row.price}</td>
              <td>
                <button onClick={() => contextData.dispatch({ type: "ADD_ITEM", payload: row })}>Add</button>
                <button onClick={() => contextData.dispatch({ type: "REMOVE_ITEM", payload: row })}>Remove</button>
              </td>
            </tr>
          )

        })}
      </tbody>
    </table>
  )
}

export default Table