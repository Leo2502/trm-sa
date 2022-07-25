import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contacto from './components/Contacto/Contacto'

function App() {
  return (
    <HashRouter>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/contacto" element={ <Contacto/> }/>
          <Route path="*" element={ <Navigate to={"/"} /> } />
        </Routes>
        <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
