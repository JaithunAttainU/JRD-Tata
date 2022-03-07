import ToDoList from "./ToDoList.js";
import Task, { STATUS } from "./Task.js";

var buttonEle = document.getElementById('add-task-btn');
var inputEle = document.getElementById('input-text')
var todoListEle = document.getElementById('to-do')

const dropDownEle = document.getElementById('dropdown');


const allEle = document.getElementById('all');
const completedEle = document.getElementById('comp');
const pendingEle = document.getElementById('pend');

allEle.addEventListener('click', () => {
  dropDownEle.innerText = "Show All"
  updateToDoList(todoListObj.getAllTask())
})

completedEle.addEventListener('click', () => {
  dropDownEle.innerText = "Completed"

  updateToDoList(todoListObj.getAllCompletedTask())
})

pendingEle.addEventListener('click', () => {
  dropDownEle.innerText = "Pending"

  updateToDoList(todoListObj.getAllPendingTask())
})

completedEle.ad
const todoListObj = new ToDoList()

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

    const task = new Task(newTask)
    todoListObj.addTask(task)
    updateToDoList(todoListObj.getAllTask())
    inputEle.value = ''
  }
})

function strikeTask(event) {
  var taskId = parseInt(event.target.parentElement.parentElement.getAttribute('id'));
  todoListObj.toggleStatus(taskId);
  updateToDoList(todoListObj.getAllTask())
}

function removeHandler(event) {
  const taskId = parseInt(event.target.parentElement.getAttribute('id'))
  todoListObj.removeTask(taskId)
  updateToDoList(todoListObj.getAllTask())
}

function updateToDoList(toDoList) {
  todoListEle.innerHTML = ''
  for (const task of toDoList) {
    const element = `
      <div class="input-group mb-3" id=${task.id}>
        <div class="input-group-text">
          <input class="form-check-input mt-0" type="checkbox" ${task.status === STATUS.COMPLETED ? 'checked' : ''} >
        </div>
          <input type="text" disabled class="form-control ${task.status === STATUS.COMPLETED ? 'checked-style' : ''}" value=${task.taskName}>
        <button class="btn btn-danger" id=${task.id}>X</button>
      </div>`

    const divElement = document.createElement('div')
    divElement.innerHTML = element
    todoListEle.appendChild(divElement)

    divElement.querySelector('.btn').addEventListener('click', removeHandler)
    divElement.querySelector('.form-check-input').addEventListener('click', strikeTask)
  }
}