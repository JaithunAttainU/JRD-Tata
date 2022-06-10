import { useEffect, useState } from "react"
import CartItems from "./CartItems"
import { ProductContextComponent } from "./ProductContext"
import Table from "./Table"

function Products(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    let url = `https://fakestoreapi.com/products`
    const response = await fetch(url)
    const allProducts = await response.json()
    setProducts(allProducts)
  }

  return (
    <ProductContextComponent>
      <CartItems />
      <Table rows={products} />
    </ProductContextComponent>
  )
}

export default Products