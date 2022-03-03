class Product {
  constructor(name, category, id, price) {
    this._name = name
    this.category = category,
      this.id = id
    this._price = price
  }

  get price() {
    return this._price
  }

  get name() {
    return this._name
  }
}