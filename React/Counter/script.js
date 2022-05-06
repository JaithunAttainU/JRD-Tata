let count = 0;

const displayElement = document.getElementById('displayCount')

displayElement.innerHTML = `<p>You pressed <span>${count}</span></p>`
function increment() {
  count++;
  displayElement.innerHTML = `<p>You pressed <span>${count}</span></p>`
}

function decrement() {
  count--;
  displayElement.innerHTML = `<p>You pressed <span>${count}</span></p>`
}