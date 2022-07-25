import './Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavbarComp = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to={"/"}><img src='../assets/multimedia/images/logo.png' alt="logo" className='w-100'/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <NavDropdown title="Institucional" id="basic-nav-dropdown">
                          <NavDropdown.Item><Link to={"/historia"}>Historia</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to={"/planta"}>Planta</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                          <NavDropdown.Item><Link to={"/reparacion"}>Reparación de motores</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to={"/mantenimiento"}>Mantenimiento Electromecánico</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to={"/monajes"}>Montajes</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to={"/mecanizados"}>Mecanizados</Link></NavDropdown.Item>
                          <NavDropdown.Item><Link to={"/ingenieria-asesoramiento"}>Ingeniería y Asesoramiento</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to={"/obras"}>Obras</Link></Nav.Link>
                        <Nav.Link><Link to={"/clientes"}>Clientes</Link></Nav.Link>
                        <Nav.Link><Link to={"/proveedores"}>Proveedores</Link></Nav.Link>
                        <Nav.Link><Link to={"/contacto"}>Contacto</Link></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </header>
    )
}

export default NavbarComp