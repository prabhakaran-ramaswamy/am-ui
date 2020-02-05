import React from 'react';
import {  withRouter } from "react-router-dom";
import {
  Table,
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button
} from 'react-bootstrap';
import history from '../../history';

class AssetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [
        {
          id: '1',
          description: '',
          assertNumber: '',
          serial: '',
          taggedTo: '',
          status: '',
        },
      ],
    };
  }

  gotoCreate (){
    history.push("/asset-create");
  }
  renderTableData() {
    return this.state.assets.map((asset, index) => {
      const {id, description, assertNumber, serial, status} = asset;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{description}</td>
          <td>{assertNumber}</td>
          <td>{serial}</td>
          <td>{status}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Container>
        <ButtonToolbar>
  <Button variant="secondary" onClick={this.gotoCreate}>Create</Button>
  
</ButtonToolbar>
        <Container>
  <Row>
    <Col></Col>
    <Col xs={6} align="center" style={{fontSize:"x-large","fontWeight": "bold"}}>Asset list</Col>
    <Col></Col>
  </Row>
 </Container>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>#id</th>
              <th>description</th>
              <th>assertNumber</th>
              <th>serial</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </Table>
      </Container>
      </Container>
    );
  }
}

export default withRouter(AssetList);