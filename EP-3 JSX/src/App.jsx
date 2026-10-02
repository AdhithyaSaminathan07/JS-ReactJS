import{ Fragment } from 'react'
import './App.css'


function App() {
  let author = "Adhithya"

  let isLoggedIn = true;

  return (
   <Fragment>
    <h1 style={{backgroundColor:"red",color:"white"}}>React JSX </h1>   
    <label htmlFor="User">User: </label>
    <input type="text" placeholder='Enter your name' />
    <p>{author} </p>
    {/* <button onClick={newFun} >Click Me</button> */}

    {/* condition Rendering  */}
    {
      isLoggedIn && <h1> Welcome to our website <br/><br/><br/> By <br/><br/><br/> {author}</h1>
    }

   </Fragment>,
   <>
   <h1>Next Episode - Component</h1>
   </>
  )
}

export default App
