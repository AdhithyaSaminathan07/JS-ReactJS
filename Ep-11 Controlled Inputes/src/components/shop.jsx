import { useState } from 'react'
import ProductItem from './ProductItem';

const Shop = () => {
    let [product,setproduct] =useState({
        name:"Iphone 17",
        price:1000,
        description:"The latest Iphone 18 Duo Camera with 1TB storage and 8GB RAM",
    });

  return (
    <div>
        <h1>Welcome to My Shop</h1>
        <ProductItem  product = {product} />
    </div>
  )
}

export default Shop
