import './App.scss';
import NavbarComp from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Contacto from './components/Contacto/Contacto'
import Nosotros from './components/Nosotros/Nosotros'
import Footer from './components/Footer/Footer'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <div className="App">
        <NavbarComp/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/contacto" element={ <Contacto/> } />
          <Route path="/nosotros" element={ <Nosotros/> } />
          <Route path="*" element={ <Navigate to={"/"} /> } />
        </Routes>
        <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
