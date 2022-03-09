console.log("Hello")
//http
//fs - file system

const fs = require('fs')
const fsPromises = require('fs/promises')

/* Read a file */
console.log("Before Read")
// Sync
const data = fs.readFileSync('./sample.txt', { encoding: 'utf8' })
console.log(data)

//Async
fs.readFile('./sample.txt', { encoding: 'utf8', }, (err, data) => {
  if (err) {
    console.log("Error Reading File")
    return
  }
  console.log(data)
})
console.log("After Read")


// Write to a file
console.log("Before Write")
const data = "Sample data to Write to a file"
fs.writeFileSync('write.txt', data, { encoding: 'utf-8'/*, flag: 'wx' */ })

//Make a directory and then write to a file
fs.mkdir('myfiles/test/app/pkg', { recursive: true }, (err) => {
  if (err) throw err;

  //Async
  fs.writeFile('myfiles/test/app/pkg/callBAckWrite.txt', 'RandomText', { encoding: 'utf-8' }, () => {
    console.log("File Write Completd")

    //Example of call Back hell
    // fs.readFile('', () => {
    //   fs.app
    // })

  })
})
console.log("After Write")

//Append data to a file in Async
fs.appendFile('write.txt', '\nNew Data2', { encoding: 'utf-8' }, () => {
  console.log("Appended Successfully")
})

//Remove a file
fs.unlink('write.txt', (err) => {
  if (err) throw err;
  console.log('write.txt was deleted');
});

//Reading a file using fs/promises
const readPromiseObj = fsPromises.readFile('write.txt', { encoding: 'utf-8' })
readPromiseObj.then((data) => {
  console.log(data)
})

//Using async/await
async function readMyFiles() {
  const data = await fsPromises.readFile('wri.txt', { encoding: 'utf-8' })
  console.log(data)
}
readMyFiles()

