import "../style/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

// import Button from 'react-bootstrap/Button';

function NavbarComponent() {
  const navigate = useNavigate();

  const productpage = () => {
    navigate("CategoryPage");
  };

  const home = () => {
    navigate("");
  };

  return (
    <>
      <Navbar expand="lg" className=" navbar-external">
        <Container>
          <Navbar.Brand id="logo" onClick={home} className="logo">
            SHOP.CO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={productpage}>Men</Nav.Link>
              <Nav.Link onClick={productpage}>Women</Nav.Link>
              <Nav.Link onClick={productpage}>New Arrival</Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="search "
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <LocalMallIcon className="mx-3" />
            <AccountCircleIcon />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarComponent;
