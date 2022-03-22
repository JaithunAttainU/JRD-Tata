const express = require('express')
const app = express()
const multer = require('multer')
const productMockData = require('./mock/products.json')
const cloudinary = require('cloudinary').v2
const fs = require('fs/promises')
const Base64 = require('js-base64')

//Cloudinary configuration. Add your own api_key & api_secret
cloudinary.config({
  cloud_name: 'sample',
  api_key: '874837483274837',
  api_secret: 'a676b67565c6767a6767d6767f676fe1',
})

app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


//Multer disk Strorage Config
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

//Multer Memory Storage Config
// const uploads = multer({
//   storage: multer.memoryStorage()
// })

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`)
})

app.post('/products', uploads.single('productImg') /*uploads.array('productImg', 3)*/, (req, res) => {
  const productData = req.body

  const fileData = req.file
  // const fileData = req.files
  console.log(fileData)

  if (fileData) {

    //Local path - Disk Storage
    cloudinary.uploader.upload(`${__dirname}/public/${fileData.filename}`, async function (error, result) {
      // console.log(result, error)
      productData.imageUrl = result.secure_url
      //Deleting the file in local
      await fs.unlink(`${__dirname}/public/${fileData.filename}`)
    })

    //Base64 String - Memory Storage
    const bufferDataBase64 = Base64.encode(fileData.buffer)
    cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${bufferDataBase64}`, function (error, result) {
      // console.log(result, error)
      productData.imageUrl = result.secure_url
    })
  }
  productMockData.products.push(productData)
  console.log(productData)
  res.send("Posted Successfully")
})

app.get('/products', (req, res) => {
  res.send(productMockData.products)
})
app.listen(8081)

//Interview Question
// const resultObj = calc.add(5).multiply(2).sub(1).divide(2)
// console.log(resultObj.total)