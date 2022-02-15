function buttonOnClickHandler() {
  console.log("Button is clicked")
}

function mouseEnterHandler() {
  console.log("Mouse Enter")
}

function mouseLeaveHandler() {
  console.log("Mouse Leave")
}

var buttonElement = document.getElementById("clickMe")
// var buttonElementByClass = document.getElementsByClassName('btn')[0];

var buttonClickCount = 0

//(eventName, callback func)
buttonElement.addEventListener('click', function () {
  buttonClickCount++;
  console.log("Button is clicked" + buttonClickCount)
})

//Can also add multiple callback for the same event
buttonElement.addEventListener('click', function () {
  console.log("Button is clicked 2")
})

// buttonElementByClass.addEventListener('click', buttonOnClickHandler);
// console.log(buttonElement)

var boxElement = document.getElementsByClassName('box')[0];
boxElement.addEventListener('mouseenter', mouseEnterHandler)
boxElement.addEventListener('mouseleave', mouseLeaveHandler)