function buttonOnClickHandler() {
  console.log("Button is clicked")
}

function mouseEnterHandler(param1) {
  console.log("Mouse Enter")
}

function mouseLeaveHandler() {
  console.log("Mouse Leave")
}

var buttonElement = document.getElementById("clickMe")
var buttonElementByClass = document.getElementsByClassName('btn')[0];
var boxElement = document.getElementsByClassName('box')[0];


var numbers = [1, 2, 4]
var buttonClickCount = 0

function buttonHandler() {
  buttonClickCount++;
  if (buttonClickCount === 3) {
    buttonElement.removeEventListener('click', buttonHandler)
    boxElement.removeEventListener('mouseenter', mouseEnterHandler)
    boxElement.removeEventListener('mouseleave', mouseLeaveHandler)
  }
  console.log("Button is clicked" + buttonClickCount)

}
//(eventName, callback func)
buttonElement.addEventListener('click', buttonHandler, { once: true })

//Can also add multiple callback for the same event
// buttonElement.addEventListener('click', function () {
//   console.log("Button is clicked 2")
// })

// buttonElementByClass.addEventListener('click', buttonOnClickHandler);
// console.log(buttonElement)

boxElement.addEventListener('mouseenter', mouseEnterHandler)
boxElement.addEventListener('mouseleave', mouseLeaveHandler)

//add event listeners in HTML Elements & and through addEventListener() DOM method
//Access HTML elements by getElementById, getElementsByClassName, getElementsByTagName, etc
//Event bubbling
//Stop event bubbling and to preventDefault event behaviours

// template - '', "", ``