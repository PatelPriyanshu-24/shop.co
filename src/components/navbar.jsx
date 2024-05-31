import '../style/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


 function NavbarComponent() {
    
  

  return (
   <>
 <Navbar expand="lg" className=" navbar-external">
      <Container>
        <Navbar.Brand href="#home" id="logo">SHOP.CO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">On-Sale</Nav.Link>
            <Nav.Link href="#link">New Arrival</Nav.Link>
            <Nav.Link href="#link">Brands</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="search "
              aria-label="Search"
            />
           
          </Form>
          
          </Nav>
         
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
   </>
  )
}
 export default NavbarComponent