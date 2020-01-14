import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Navbar, Nav, Container, Row, Col, Jumbotron, NavItem} from 'react-bootstrap';

const NavigationBar = () => (
  <Router>
    <Jumbotron fluid>
      <Container>
        <h1>Asset Management</h1>
        <p />
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand > <Link to="/">Users</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav pullRight>
                  <Nav.Link href="#"><Link to="/asset">Asset</Link></Nav.Link>
                  <Nav.Link href="asset-management">Asset Management</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </Router>
);

export default NavigationBar;
