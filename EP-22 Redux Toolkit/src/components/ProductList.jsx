import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine } from "react-loading-indicators";
import useFetch from "./cusrom-hook/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdFolderDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import {useDispatch} from "react-redux"
import {addItem} from "../store/cartSlice"

const ProductList = () => {
  // let [products, setProducts] = useState([]);
  // let [error,setError] =useState( "" )
  // let [isLoading,setIsLoading] = useState(true)

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       if(response.ok){
  //         return response.json();

  //       }
  //       else{
  //         throw new Error("Search for proper Data")
  //       }

  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error)=>{
  //       setError(error.message);
  //     })
  //     .finally(()=>{
  //       setIsLoading(false)
  //     })
  // }, []);

  let navigate = useNavigate()

  let { products, error, isLoading , setProducts} = useFetch(
    "http://localhost:5000/products",
  );

  let handelDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
    .then(()=>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
});
    })

    let newProductList = products.filter(product => product.id !== id)
    setProducts(newProductList)

  }

  let dispatch = useDispatch()

  let addItemToCart = (product) => {
    dispatch( addItem(product) )

  }

  if (isLoading) {
    return (
      <div>
        <center>
          <LifeLine
            color="#32cd32"
            size="large"
            text="Loading"
            textColor="red"
          />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <article>
          <span>To Create New Product</span>
          <Button onClick={()=>navigate("/newProduct")}>Click Me!</Button>
        </article>
        <h1>Product List</h1>
        {products.length !== 0 && (
          <section className="products">
            {products.map((product) => (
              <Card
                key={product.id}
                style={{ width: "18rem" }}
                className="product"
              >
                <center>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "9rem", height: "12rem" }}
                  />
                </center>

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    ${product.price}
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button variant="primary" onClick={()=> addItemToCart(product)}>
                    <MdAddShoppingCart />
                  </Button>
                  <Button variant="secondary" onClick={()=>{navigate(`/update/${product.id}`)}}>
                    <FaEdit />
                  </Button>
                  <Button variant="danger" onClick={()=> handelDelete(product.id)}>
                    <MdFolderDelete />
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </section>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }
};

export default ProductList;
