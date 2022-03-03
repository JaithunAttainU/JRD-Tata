export default class Cart {
  constructor() {
    this.items = []
  }

  addProduct(product) {
    this.items.push(product)
  }

  removeAllProduct() {
    this.items = []
  }

  getCount() {
    return this.items.length;
  }

  getTotalPrice() {
    return 100;
  }
}
function func1() {

}


const COUNT = 10

export { func1, COUNT }

export function dsfdf() {

}