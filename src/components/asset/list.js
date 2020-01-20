import React from 'react';
import {
  Table,
  Container,
  Row,
  Col
} from 'react-bootstrap';

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
      <div>
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
      </div>
    );
  }
}

export default AssetList;
