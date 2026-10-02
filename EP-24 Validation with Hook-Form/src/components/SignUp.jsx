import React from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;

let schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your FullName"),
  email: Yup.string()
    .email()
    .required("Email is Required")
    .matches(/^[a-z 0-9]+@[a-z]{3,5}.[a-z]{3,4}$/, "Enter Vaild Email "),
  age: Yup.number()
    .integer()
    .positive()
    .required("Enter your Age")
    .min(18, "Enter Age between 18 to 30")
    .max(30,"Enter Age between 18 to 30"),
  password:Yup.string().required("Enter Your Password"),
  cPassword:Yup.string().oneOf([Yup.ref("password"),null],"Password Must Match"),

});

const SignUp = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };

  renderCount++;

  let [input, setInput] = useState("");

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let handleData = (data) => {
    console.log(data);
  };
  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography textAlign="center" variant="h6">
        Create Account - {renderCount}
      </Typography>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Age"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        {...register("cPassword")}
        error={!!errors.cPassword}
        helperText={errors.cPassword?.message}
      />
      <Button variant="contained" type="submit">
        SignUp
      </Button>
    </Paper>
  );
};

export default SignUp;
