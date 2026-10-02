import React from 'react'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Products = () => {

  let [count,setCount] = useState(0)
  let [count1,setCount1] = useState(0)

  // useEffect(()=>{
  //   console.log("This Effect Will run after every render")

  // })

  //  useEffect(()=>{
  //   console.log("This Effect Will run only on initial render")

  // },[])

   useEffect(()=>{
    console.log("This Effect Will run only dependency Change")

  },[count])

   useEffect(()=>{
    console.log("This Effect Will run only dependency Change" + count1)

  },[count1])

  console.log("Inital Render");
  

  return (
    <div>
      <h1>Products -{count}-{count1}</h1>
      <Button varient="Primary" onClick={()=>{setCount(count+1)}}>Increase</Button>
      <Button varient="Primary" onClick={()=>{setCount1(count1+1)}}>Increase1</Button>
      <Link to="list">List</Link>
      <Link to="details">Details</Link>
      <Outlet />
    </div>
  )
}

export default Products
