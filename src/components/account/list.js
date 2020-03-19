import React from 'react';
import {  withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {List} from 'immutable';
//import {useSelector} from 'react-redux';
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

const UserList = (props) => {
     
  const gotoCreate = ()=>{
    history.push("/user-create");
  };
  
  const renderTableData = ()=>{
    
    return props.accounts.map((user, index) => {
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
  };

  
    return (
      <Container>
         <Container>
        <ButtonToolbar>
  <Button variant="secondary" onClick={gotoCreate}>Create</Button>
  
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
          <tbody>{renderTableData()}</tbody>
        </Table>
      </Container>
      </Container>
    );
}

  function mapStateToProps(state) {
    return { accounts:state.acc.get("accounts") || List() }
  }
  
  UserList.propTypes = {
    accounts:  PropTypes.any,
  };
  
export default connect(mapStateToProps)( withRouter(UserList))
