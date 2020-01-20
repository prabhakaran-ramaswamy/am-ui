import React from 'react';

import {
  Table,
  Container,
  Row,
  Col
} from 'react-bootstrap';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{id: '1', firstName: '', lastName: '', email: '', mobile: ''}],
    };
  }

  renderTableData() {
    return this.state.users.map((user, index) => {
      const {id, firstName, lastName, email, mobile} = user;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>
            {firstName} {lastName}
          </td>
          <td>{email}</td>
          <td>{mobile}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
      <Container>
<Row>
  <Col></Col>
  <Col xs={6} align="center" style={{fontSize:"x-large","fontWeight": "bold"}}>User list</Col>
  <Col></Col>
</Row>
</Container>
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
          <tbody>{this.renderTableData()}</tbody>
        </Table>
      </Container>
      </div>
    );
  }
}

export default UserList;
