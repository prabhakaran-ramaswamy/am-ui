import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <Jumbotron fluid style={{"marginBottom": ":0px"}}>
        <Container>
          <h1>Asset Management</h1>
          <Row>
            <Col>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{"marginBottom": ":0px"}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav>
                    <Nav.Link as={NavLink} to="/users" exact>
                      Users
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/assets" exact>
                      Asset
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/asset-user-list" exact>
                      Asset Management
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      </div>
    );
  }
}

export default NavigationBar;
