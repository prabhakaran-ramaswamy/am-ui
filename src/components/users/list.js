import React, {Component} from 'react';

import {Table,Navbar, Nav, Container, Row, Col, Jumbotron, NavItem} from 'react-bootstrap';


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={"users":[{id:"1",firstName:"",lastName:"",email:"",mobile:""}]};
  }

  renderTableData() {
    return this.state.users.map((user, index) => {
       const {id, firstName, lastName, email, mobile} = user
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{firstName} {lastName}</td>
             <td>{email}</td>
             <td>{mobile}</td>
          </tr>
       )
    })
 }

  render() {

    return (
        <Container>
        <Table responsive>
        <thead>
          <tr>
            <th>#id</th>
            <th>name</th>
            <th>email</th>
            <th>mobile</th>
          </tr>
        </thead>
        <tbody>
                  {this.renderTableData()}
        </tbody>
      </Table>
      </Container>
    );
  }
}

export default UserList;
