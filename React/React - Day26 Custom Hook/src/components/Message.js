import React from 'react'
import { useLocalStorage } from '../customHooks'

export default function (props) {
  // useDocumentTitle(`you have clicked ${count} times`)
  useLocalStorage('message', "Hello")
  return (
    <div></div>
  )
}
