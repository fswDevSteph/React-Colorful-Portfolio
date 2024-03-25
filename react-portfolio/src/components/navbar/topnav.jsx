import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './topnav.css'

function TopNav() {
  return (
    <section className='navbar-custom-color'>
    <Navbar expand="lg" className="bg-body-tertiary flex-row  ">
      <Container className='navbar-custom-color'>
        <Navbar.Brand href="#home" className="myName navbar-custom-color">Stephanie Perroni</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-custom-color ">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Menu" id="basic-nav-dropdown" className='basic-nav-dropdown navbar-custom-color '>
              <NavDropdown.Item href="#action/3.1" className='navbar-custom-color'>About Me</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='navbar-custom-color'>
               Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='navbar-custom-color'>Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='navbar-custom-color'>
                Resume
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
          {/* <div class="custom-shape-divider-bottom-1711342741">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
      </Container>
       <div class="custom-shape-divider-bottom-1711342741">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </Navbar>
  
    </section>
  );
}

export default TopNav;