import React from 'react';
import {  withRouter } from "react-router-dom";
import {useSelector} from 'react-redux';
import {
  Table,
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button
} from 'react-bootstrap';
import history from '../../history';
import {accountselector} from '../../features/account';

  const UserList = () => {
     
   
  const gotoCreate = ()=>{
    history.push("/user-create");
  };
  
  const renderTableData = ()=>{
    const  users = useSelector(accountselector.getAccounts);
    return users.map((user, index) => {
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

export default withRouter(UserList);
