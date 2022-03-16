const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/users', (req, res) => {
  // res.sendFile(`${__dirname}/home/index.html`)

  const users = [{ username: 'user1', address: 'New street' }, { username: 'user2', address: 'New streer' }]
  res.render('users', { users })

  // res.render('index', { username: 'xyz', age: 50 })
})

app.get('/products/:productId', (req, res) => {

  const products = [{ productName: 'p1', price: 100 }, { productName: 'p2', price: 200 }]
  res.render('products', { products })
})


app.listen(8081)