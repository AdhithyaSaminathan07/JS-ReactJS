import React,{ useState } from 'react'
import styled from 'styled-components'


const Button = styled.button
`
width: 150px;
height: 50px;
background-color: blue;
color: white;
`

const CounterApp = () => {
 const [count, setCount] = useState(0);
 const[data, setData] = useState("loading");

 let message; 
 let remainingClick = 10 - count


   function handelIncrease(){
    setCount((prevCount)=> prevCount + 1);
   }

  if (count < 10){
    message =(
      <div>
        <h3>You Clicked {count} times</h3>
        <p>Still {remainingClick} clicks to reach 10% Discount</p>
      </div>
    )
  }
  else if(count ===10){
    message =(
      <div>
        <h3>You Clicked {count} times</h3>
        <p>You Unlocked 10% Discount!</p>
      </div>
    )

  }
  else if(count < 20){
    message =(
      <div>
        <h3>You Clicked {count} times</h3>
        <p>Your are on the way to get more rewards! Keeps clicks to get 20% discount </p>
      </div>
    )
  }
  else{
    message =(
      <div>
        <h3>You Clicked {count} times</h3>
        <p>Your Reached the Top Rewards .You Are Click Master</p>
      </div>
    )
  }

  let displayComp=()=>{
    switch(data){
      case"loading":return <LoadingComp />
      break;
      case"success":return <SuccessComp />
      break;
      case"error":return <ErrorComp />
      break;
    }
  }
  return (
    <div>
        <h1>Click to Unlock Reward 🎉🎉 - {count}</h1>
        <Button onClick={handelIncrease}>Click ME</Button>
        {message}
        {displayComp()}
        {/* {count >=10 ? <p>🎉🎉 Congratulations You have unlocked 10% Discount 🎉🎉</p> : <p>Click 10 times to unlock the reward</p>}
        {count >= 20 && <p>Your Are Click Master</p>} */}
    </div>
  )
}

export default CounterApp


function LoadingComp(){
  return(
    <div>
      <h6>Loading...</h6>
    </div>
  )
}

function SuccessComp(){
  return(
    <div>
      <h6>Success🎆</h6>
    </div>
  )
}

function ErrorComp(){
  return(
    <h6>Error🥶</h6>
  )
}