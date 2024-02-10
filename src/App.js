import './App.css';
import {Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App scroll-smooth relative">
      <NavBar/>
      <NavBar2/>
      <Routes>
        <Route path='/' element={<Feature/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
