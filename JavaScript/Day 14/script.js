//Http Request & Ajax
// Ajax - Asynchronous JavaScript and XML - Data XML - later the data format moved to JSON - Ajaj
// JSON = JavaScript Object Notation

// https://jsonplaceholder.typicode.com/users/1 - internet - server - DB - Server - internet - browser
// METHOD: GET


//1. Create XMLHttpRequest Object
let requestObj = new XMLHttpRequest();

//2. Open the request by mentioning Request Method and URL
requestObj.open('GET', 'https://jsonplaceholder.typicode.com/users/1')

//3. Add Callback function to handle Success
requestObj.onload = function () {
  if (requestObj.status == 200) {
    let response = requestObj.response;

    //The response received will be of string type. Change it to JavaScript Object using JSON.parse()
    response = JSON.parse(response);
    console.log(response)
  }
}

//4. Add Callback function to handle error
requestObj.onerror = function () {
  console.log("Error!")
}

//5. Send the request
requestObj.send();

//JavaScript objects cannot be sent as data format. Convert JS Objects to string using JSON.stringify()
const obj = { name: 'abc' }
const stringObj = JSON.stringify(obj)


fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json))