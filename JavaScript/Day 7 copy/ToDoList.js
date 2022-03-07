import { STATUS } from "./Task.js";

export default class ToDoList {
  constructor() {
    this.todoList = []
  }

  addTask(task) {
    this.todoList.push(task)
  }

  getAllTask() {
    return this.todoList;
  }

  getAllCompletedTask() {
    return this.todoList.filter((task) => {
      if (task.status === STATUS.COMPLETED) {
        return true
      } else {
        return false
      }
    })
  }

  getAllPendingTask() {
    return this.todoList.filter((task) => {
      if (task.status === STATUS.PENDING) {
        return true
      } else {
        return false
      }
    })
  }
  toggleStatus(taskId) {
    this.todoList = this.todoList.map((task) => {
      if (task.id === taskId) {
        task.status = task.status === STATUS.COMPLETED ? STATUS.PENDING : STATUS.COMPLETED
      }
      return task
    })
  }
  removeTask(taskId) {
    this.todoList = this.todoList.filter((task) => {
      return task.id !== taskId
    })

    // const index = this.todoList.findIndex((task) => task.id === taskId)
    // if (index != -1) {
    //   this.todoList.splice(index, 1)
    // }
  }
}