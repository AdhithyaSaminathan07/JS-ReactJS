import Header from './components/Header'
import Footer from './components/Footer'
import { Content } from './components/Content';

function App() {

  let user = "Adhithya";
  
  return (
    <>
      <Header user={user} />
      <Content />
      <Footer  user = "Saminathan"/>
    </>
  )
}

export default App
