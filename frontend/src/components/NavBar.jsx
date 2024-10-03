import React, { useState } from "react";
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
import { BsSearch } from "react-icons/bs";

function NavBar({ logout, addClass, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  let user = useUserStore((state) => state.user);

  const username = user?.username
    ? user.username[0].toUpperCase() + user.username.slice(1).toLowerCase()
    : "Guest";

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Container fluid className="flex-column flex-lg-row">
        <Navbar.Brand className="d-flex align-items-center mb-2 mb-lg-0">
          <img src={icon} width="40" height="40" alt="" className="me-2" />
          <a
            href="https://github.com/GavriloaiaMircea/TeachTrack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none me-2"
          >
            <i className="bi bi-github" style={{ fontSize: "2.5rem" }}></i>
          </a>
          <span className="h5 mb-0">Hello {username}</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex-column flex-lg-row w-100"
        >
          <Form
            className="d-flex mb-2 mb-lg-0 mx-lg-auto"
            style={{ maxWidth: "400px", width: "100%" }}
            onSubmit={handleSearch}
          >
            <FormControl
              type="search"
              placeholder="SEARCH A CLASS"
              className="me-2"
              style={{ flexGrow: 1 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-dark" type="submit">
              <BsSearch />
            </Button>
          </Form>

          <Nav className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center">
            <Button
              variant="primary"
              className="mb-2 mb-lg-0 me-lg-2"
              onClick={addClass}
            >
              Add a new Class
            </Button>
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
