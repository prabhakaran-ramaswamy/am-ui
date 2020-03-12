import React from 'react';
import {  withRouter } from "react-router-dom";
import { connect } from 'react-redux';
//import {List} from 'immutable';
import {
  Table,
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button
} from 'react-bootstrap';
import history from '../../history';
//import {accountselector} from '../../features/account';
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.renderTableData = this.renderTableData.bind(this);
  }
  gotoCreate(){
    history.push("/user-create");
  }
  
  renderTableData(){
    return  this.props.accounts.map((user, index) => {
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
      <Container>
         <Container>
        <ButtonToolbar>
  <Button variant="secondary" onClick={this.gotoCreate}>Create</Button>
  
</ButtonToolbar>
</Container>
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
      </Container>
    );
}
}
function mapStateToProps() {
  const listOfAccounts = [];
        return { 
            accounts: [] 
        }
  }

export default connect(
  mapStateToProps,
  null
)( withRouter(UserList))
