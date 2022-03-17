const express = require('express')
const app = express()
const multer = require('multer')
const productMockData = require('./mock/products.json')

app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

const uploads = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now()
      cb(null, `${uniquePrefix}-${file.originalname}`)
    }
  }),
  fileFilter: function fileFilter(req, file, cb) {

    if (file.mimetype == 'image/jpeg') {
      cb(null, true)
    } else {
      cb(null, false)
    }
  }
})

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`)
})


// app.get('./products', (req,res) => {

// })
// console.log(__dirname)
// console.log(__filename)

app.post('/products', uploads.single('productImg') /*uploads.array('productImg', 3)*/, (req, res) => {
  const productData = req.body

  const fileData = req.file
  // const fileData = req.files
  console.log(fileData)

  if (fileData) {
    productData.imageUrl = fileData.filename
  }
  productMockData.products.push(productData)

  console.log(productData)
  res.send("Posted Successfully")
})

app.get('/products', (req, res) => {
  res.send(productMockData.products)
})
app.listen(8081)