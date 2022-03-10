
const { readFileSync, createReadStream, createWriteStream, write } = require('fs')

// Reading large files by this is not preferred
const data = readFileSync('./enwik8.txt')
console.log(data[0])


//ReadStream
const readStream = createReadStream('./enwik8.txt', { encoding: 'utf-8', highWaterMark: 1000 })
readStream.on('data', (data) => { //64kb
  console.log(data)
})

readStream.on('close', () => {
  console.log("File Closed")
})

readStream.on('open', () => {
  console.log("File Opened")
})

readStream.on('end', () => {
  console.log("Ended")
})

setTimeout(() => {
  readStream.pause()
  setTimeout(() => {
    readStream.resume()

    //Read the next Immediate Chunk
    readStream.read()
    readStream.read()
    readStream.read()
  }, 3000)
}, 2000)



//Write Stream
const writeStream = createWriteStream('writeStream.txt', 'utf-8')

//Write Chunk 1
const data = 'Write Stream Example'
writeStream.write(data, (err) => {
  if (err) {
    console.log("error")
  }
})

//Write Chunk 2
writeStream.write(data, (err) => {
  if (err) {
    console.log("error")
  }
})

//Writing to a file for every second
setInterval(() => {
  writeStream.write(`\n${new Date().toLocaleTimeString()}`, (err) => {
    if (err) {
      console.log("error")
    }
  })
}, 1000)

// writeStream.end()

//Buffer Sample
const buff = new Buffer([0, 2, 13]) //0 - 255
console.log(buff.length)

//Copying contents from one file to another - BruteForce
const readStream = createReadStream('./enwik8.txt', { encoding: 'utf-8', highWaterMark: 1000 })
const writeStream = createWriteStream('writeStream.txt', 'utf-8')

readStream.on('data', (data) => { //64kb
  writeStream.write(data)
})


//Better approach to copy content using PiPe
const readStream = createReadStream('./enwik8.txt', { encoding: 'utf-8', highWaterMark: 1000 })
const writeStream1 = createWriteStream('writeStream1.txt', 'utf-8')
const writeStream2 = createWriteStream('writeStream2.txt', 'utf-8')

readStream.pipe(writeStream1)
readStream.pipe(writeStream2)