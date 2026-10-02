import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content';

function App() {

  let user = "Adhithya";
  
  return (
    <div className="app">
      <Header user={user} />
      <Content />
      <Footer  user = "Saminathan"/>
    </div>
  )
}

export default App
