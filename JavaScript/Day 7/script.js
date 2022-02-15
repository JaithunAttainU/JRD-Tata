var buttonEle = document.getElementById('add-task-btn');
var inputEle = document.getElementById('input-text')
var todoListEle = document.getElementById('to-do')

buttonEle.addEventListener('click', function () {
  var newTask = inputEle.value;

  if (newTask.length == 0) {
    alert("Enter a task")
  } else {

    // var oldList = todoListEle.innerHTML;
    // // var newList = oldList + '<li>' + newTask + '</li>'
    // var newList = `${oldList} <li> ${newTask} <button>X</button></li>`;
    // todoListEle.innerHTML = newList;

    var removeBtnEle = document.createElement('button');
    removeBtnEle.innerText = 'x';
    removeBtnEle.addEventListener('click', removeHandler)


    var newTaskEle = document.createElement('li');
    newTaskEle.innerText = newTask; //<li>jhv</li>
    newTaskEle.appendChild(removeBtnEle);

    todoListEle.appendChild(newTaskEle)


    inputEle.value = ''
    // console.log(newList)
    // console.log(newTask);
  }
})

function removeHandler(event) {
  event.target.parentElement.remove()
  // console.log(event)
}