import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Lottery from "./Lot";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar>
          <Container>
            
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"></Nav.Link>
                <Nav.Link href="/lottery"></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/lottery" element={<Lottery />} />
          </Routes>
        </Router>
      </>
    );
  }
}
