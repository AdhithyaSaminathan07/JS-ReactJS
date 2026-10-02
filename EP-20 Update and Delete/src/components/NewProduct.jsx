import React from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handelChange = (e) => {
    let { value, name } = e.target;
    // console.log(value, name);

    let fieldName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  console.log(newProduct);

  let handelAdd = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => {
      alert("Data Sended Successfully");
      setNewProduct({
        title: "",
        price: 500,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" textAlign="center">
        Create New product
      </Typography>
      <Grid
        component="form"
        style={{ display: "grid", gap: "20px" }}
        onSubmit={handelAdd}
      >
        <TextField
          value={newProduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handelChange}
        />
        <TextField
          value={newProduct.category}
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handelChange}
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.rate}
              name="rating.rate"
              type="number"
              label="Rate"
              variant="outlined"
              onChange={handelChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.count}
              name="rating.count"
              type="number"
              label="Count"
              variant="outlined"
              onChange={handelChange}
            />
          </Grid>
        </Grid>
        <Button variant="contained" fullWidth type="submit">
          ADD
        </Button>
      </Grid>
    </Paper>
  );
};

export default NewProduct;
