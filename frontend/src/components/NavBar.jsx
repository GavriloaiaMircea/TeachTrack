import React from "react";
import useUserStore from "../stores/useUserStore";
import icon from "../assets/icon.png";
import {
  Button,
  Form,
  FormControl,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

function NavBar(props) {
  let user = useUserStore((state) => state.user);

  user.username =
    user.username[0].toUpperCase() + user.username.slice(1).toLowerCase();

  return (
    <Navbar bg="light" expand="lg" className="justify-content-between px-3">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <img src={icon} width="40" height="40" alt="" className="me-3" />
          <span className="h4 mb-0">Hello {user.username}</span>
        </Navbar.Brand>

        <Form className="d-flex col-6 mx-auto">
          <FormControl
            type="search"
            placeholder="SEARCH A CLASS"
            className="me-3"
            style={{ flexGrow: 1 }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Nav>
          <Button variant="primary" className="me-3">
            Add a new Class
          </Button>
          <Button variant="danger" onClick={props.logout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
