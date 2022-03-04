
import { func1 as randomFunction, COUNT as CARTCOUNT } from './cart.js'
import { COUNT as WISHLISTCOUNT } from './wishlist.js'

import Cart from './cart.js'
var cart = new Cart();


var COUNT = 5
cart.addProduct({ id: 1, name: 'abc' });
console.log(CARTCOUNT)
console.log(COUNT)
console.log(WISHLISTCOUNT)

// convert JS Objects - JSON.stringify({ name: 'abc' })

// JSON.parse("{name: 'abc'}")
//localStorage and sessionStorage - Same syntax to add/get/delete
//{key: value} pairs of type only strings, other data types are not allowed
//Convert objects or other data types to strings

//To Add to localStorage/sessionStorage
localStorage.setItem("name", "ABC") 
localStorage.setItem("age", "10")

//To Get items from localStorage/sessionStorage
localStorage.getItem("name")

//To clear all items from localStorage/sessionStorage
localStorage.clear()

//To Get the length of all items in localStorage/sessionStorage
localStorage.length

//To remove particular item from localStorage/sessionStorage
localStorage.removeItem("age")


// Cookies have only 4kb of storage space mostly

