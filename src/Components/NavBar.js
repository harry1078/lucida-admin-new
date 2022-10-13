import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "../Assets/logo.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="nav-div">
      <Navbar collapseOnSelect fixed="top" expand="sm" className="navigation">
        <Container>
          <Navbar.Brand>
            <div className="logo">
              <img src={logo} alt="logo   " />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={location.pathname} className="ms-auto navigation">
              <NavDropdown title="Generate Letters" id="basic-nav-dropdown">
                <NavDropdown.Item href="/experience-letter">
                  Experience Letter
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/offer-letter">
                  Offer Letter
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/appointment-letter">
                  Appointment Letter
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/confirmation-letter">
                  Confirmation Letter{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/relieving-letter">
                  Relieving Letter
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
