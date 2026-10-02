import React from 'react'
import styled from 'styled-components'
import CounterApp from './CounterApp';

const Content = () => {
let headingStyle = {
  backgroundColor: "red",
  color: "white",
  boxShadow: "10px 10px 5px black"
}

let Button = styled.button
`
  background-color: blue;
  color: white;
  width: 100px;
  height: 50px;
`

let NewButton = styled(Button)
`
background-color: green;
box-shadow: 10px 10px 10px black;
`

let user = "Adhithya";

function printSomething(e){
  // console.log(e.target.innerText);
  // console.log("Hello All !");

  user = "Saminathan";
  console.log(user);
  
}

function printSomething1(user){
  // console.log( event.target.innerText);
  // console.log("hello Buddy " + user);

  user = "Shanmugam";
  console.log(user);
}


  return (
    <main>
      <h1 style={headingStyle}> main Content -{user}</h1>
      <Button onClick={printSomething}>Click Me! </Button>
      <NewButton onClick={(e) => {printSomething1(e)}}>Duplicate! </NewButton>
      <CounterApp />
    </main>
  );
};

export default Content;