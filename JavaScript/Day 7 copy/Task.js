export default class Task {
  constructor(str) {
    this.taskName = str
    this.id = genObj.next().value
    this.status = STATUS.PENDING
  }

}

function* genFunction() {
  var count = 1;
  while (true) {
    yield count;
    count++;
  }
}

const genObj = genFunction()
export const STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
}