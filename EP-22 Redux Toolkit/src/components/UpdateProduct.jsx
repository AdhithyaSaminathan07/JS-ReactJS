import React, { useEffect } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let [updateProduct, setUpdateProduct] = useState(null);

  let navigate = useNavigate()


  let {id} = useParams()
  console.log(id);
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`)
    .then(res => setUpdateProduct(res.data))
  },[])

  let handelChange = (e) => {
    let { value, name } = e.target;
    // console.log(value, name);

    let fieldName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

//   console.log(newProduct);

  let handelUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("Saved Successfully");
      navigate("/products")
      
    });
  };

  if(updateProduct !== null){
      
      return (
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" textAlign="center">
            Update product
          </Typography>
          <Grid
            component="form"
            style={{ display: "grid", gap: "20px" }}
            onSubmit={handelUpdate}
          >
            <TextField
              value={updateProduct.title}
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={handelChange}
            />
            <TextField
              value={updateProduct.category}
              name="category"
              label="Category"
              variant="outlined"
              fullWidth
              onChange={handelChange}
            />
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  value={updateProduct.rating.rate}
                  name="rating.rate"
                  type="number"
                  label="Rate"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  value={updateProduct.rating.count}
                  name="rating.count"
                  type="number"
                  label="Count"
                  variant="outlined"
                  onChange={handelChange}
                />
              </Grid>
            </Grid>
            <Button variant="contained"  color="success" fullWidth type="submit">
              Save
            </Button>
          </Grid>
        </Paper>
      );
    }
    else{
        <div>
            Loading...
        </div>
    }
  }

export default UpdateProduct