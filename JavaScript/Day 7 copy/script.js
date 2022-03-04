var buttonEle = document.getElementById('add-task-btn');
var inputEle = document.getElementById('input-text')
var todoListEle = document.getElementById('to-do')

inputEle.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    buttonEle.click()
  }
})

buttonEle.addEventListener('click', function () {
  var newTask = inputEle.value;

  if (newTask.length == 0) {
    alert("Enter a task")
  } else {

    const element = `
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input class="form-check-input mt-0" type="checkbox">
        </div>
        <input type="text" disabled class="form-control" value=${newTask}>
        <button class="btn btn-danger">X</button>
      </div>`

    const divElement = document.createElement('div')
    divElement.innerHTML = element
    todoListEle.appendChild(divElement)

    divElement.querySelector('.btn').addEventListener('click', removeHandler)
    divElement.querySelector('.form-check-input').addEventListener('click', strikeTask)

    inputEle.value = ''
  }
})

function strikeTask(event) {
  var listItemEle = event.target.parentElement.nextElementSibling;
  listItemEle.classList.toggle('checked-style');
  console.log(listItemEle.classList)
}

function removeHandler(event) {
  event.target.parentElement.remove()
}