import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './topnav.css'

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary flex-row ">
      <Container>
        <Navbar.Brand href="#home" className="myName">Stephanie Perroni</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Menu" id="basic-nav-dropdown" className='basic-nav-dropdown '>
              <NavDropdown.Item href="#action/3.1">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Resume
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;