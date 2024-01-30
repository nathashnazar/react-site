import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#home"><img className='logo' src='images/LOGO.png' alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav.Link className='link' href="#deets">Home</Nav.Link>
            <Nav.Link className='link' href="#deets">Features</Nav.Link>
            <Nav.Link className='link' href="#deets">About Us</Nav.Link>
            <Nav.Link className='link' href="#deets">Contact Us</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;