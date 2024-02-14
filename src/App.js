import NavBar from './components/NavBar'
import NavBar2 from './components/NavBar2'
import Feature from './components/Feature'
import Footer from './components/Footer'
import './App.css'
function App(){
  return (
    <div className='App flex flex-col relative'>
    <NavBar/>
    <NavBar2/>
    <Feature/>
    <Footer/>
    </div>
  )
}

export default App;