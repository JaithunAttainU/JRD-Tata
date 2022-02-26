
//Method: 'GET'

const getJokeBtn = document.getElementById('getJokeBtn')
const displayJokeTag = document.getElementById('jokeID')

getJokeBtn.addEventListener('click', (event) => {

  //fetch() returns a promise
  const fetchPromise = fetch('https://v2.jokeapi.dev/users/Any')

  //reached fulfilled/rejected state .then() will be invoked
  const responsePromise = fetchPromise.then((res) => {
    // console.log(res)
    return res.json() //Response Object - .json() gets the actual data
  })

  //fulfilled and rejected callback functions
  responsePromise.then((data) => {
    // console.log(data)
    if (data.error) {
      displayJokeTag.innerText = 'Error from API'
      return
    }
    if (data.type == 'single') {
      displayJokeTag.innerText = data.joke
    } else {
      displayJokeTag.innerText = `${data.setup} - ${data.delivery}`
    }
  }, (rejected) => {
    console.log("Rejected", rejected)
  })


  // fetchResponse.catch()
  // console.log(fetchResponse)
})


//Sample of async - await

// getJokeBtn.addEventListener('click', async () => {
//   const responseObject = await fetch('https://v2.jokeapi.dev/users/Any');
//   const data = await responseObject.json();
//   console.log(data)
// })
