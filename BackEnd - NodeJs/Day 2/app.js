const chalk = require('chalk') // commonJS Modules
const app2 = require('./app2')

const http = require('http')

console.log(chalk.blue("Hello Node!"))
console.log(app2.sub(5, 4))


const server = http.createServer(function (request, response) {

  const url = request.url

  if (url == '/') {
    response.write("Hello")
    response.end()
  } else if (url == '/students') {
    response.write("Hello Students")
    response.end()
  } else if (url == '/teachers') {
    response.write("Hello Teachers")
    response.end()
  } else if (url == '/students/1/123') {
    response.write("Hello Student 1")
    response.end()
  }
  console.log("Url", url)

})

server.listen(8080)
// console.log(http)

//built in modules
// http
// fs
// os
