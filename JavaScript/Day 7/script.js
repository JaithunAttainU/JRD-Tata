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
    // var newList = `${oldList} <li> ${newTask} <button >X</button></li>`;
    // todoListEle.innerHTML = newList;

    var removeBtnEle = document.createElement('button');
    removeBtnEle.innerText = 'x';
    removeBtnEle.addEventListener('click', removeHandler)

    var checkBoxEle = document.createElement('input');
    checkBoxEle.type = 'checkbox'
    checkBoxEle.addEventListener('change', strikeTask)

    var newTaskEle = document.createElement('li');
    newTaskEle.innerText = newTask; //<li>jhv</li>

    newTaskEle.prepend(checkBoxEle);
    newTaskEle.appendChild(removeBtnEle);//<li>jhv<button>x</button></li>

    todoListEle.appendChild(newTaskEle)


    inputEle.value = ''
    // console.log(newList)
    // console.log(newTask);
  }
})

function strikeTask(event) {
  var listItemEle = event.target.parentElement;

  // if (event.target.checked) {
  //   listItemEle.classList.add('checked-style');
  // } else {
  //   listItemEle.classList.remove('checked-style');
  // }
  listItemEle.classList.toggle('checked-style');
  console.log(listItemEle.classList)
}

function removeHandler(event) {
  event.target.parentElement.remove()
  // console.log(event)
}