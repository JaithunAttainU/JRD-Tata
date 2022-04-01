const express = require('express')
require('dotenv').config()
const { MongoClient } = require('mongodb')
const { body, validationResult } = require('express-validator')
const app = express()


const client = new MongoClient(process.env.MONGO_URL) //from env file
let userDetailsCollection = null;

async function initDB() {
  //connect to DB
  await client.connect()

  //Adding DB Name
  const db = client.db('User')

  //Adding Collection Name
  userDetailsCollection = db.collection('user_details')
}
initDB()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/UserDetails.html`)
})

app.post('/users', [
  body('userName').notEmpty().withMessage('Please enter UserName'),
  body('email').isEmail().withMessage('Enter Valid Email'),
  body('phone').isMobilePhone().withMessage("Enter valid Mibile number"),
  body('dob').isDate({ format: 'yyyy-mm-dd' }).withMessage('enter Valid Date'),
  body('gender').custom(value => {
    if (value != 'M' && value != 'F') {
      throw new Error('Invalid Gender Value')
    }
    return true
  })
], (req, res, next) => {
  const err = validationResult(req)

  if (!err.isEmpty()) {
    return res.status(401).json({
      error: err.array()
    })
  }
  next()
}, async (req, res) => {
  const { userName, email, phone, dob, gender } = req.body
  //add Users Data
  const addResult = await userDetailsCollection.insertOne(req.body)
  res.send(addResult)
})


app.get('/users', async (req, res) => {
  //fetch Users data from DB
  const userData = await userDetailsCollection.find({}).toArray()
  res.send(userData)
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
