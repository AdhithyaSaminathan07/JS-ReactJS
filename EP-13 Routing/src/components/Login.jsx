import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
  let {newUser} =useParams()
  let navigate = useNavigate()

  let handelNavigate =()=>{
    navigate("/")
  }

  return (
    <div>
      Login - {newUser}
      <button onClick ={handelNavigate}>Move to Home</button>
    </div>
  )
}

export default Login