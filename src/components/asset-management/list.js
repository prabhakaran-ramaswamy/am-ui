import React from 'react';
import {
  Table,
  Container,
  Row,
  Col
} from 'react-bootstrap';

class AssetManagementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      am: [{id: '1', description: '', assertNumber: '', taggedTo: ''}],
    };
  }

  renderTableData() {
    return this.state.am.map((am, index) => {
      const {id, description, assertNumber, taggedTo} = am;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{description}</td>
          <td>{assertNumber}</td>
          <td>{taggedTo}</td>
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
  <Col xs={6} align="center" style={{fontSize:"x-large","fontWeight": "bold"}}>Managed asset list</Col>
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
              <th>taggedTo</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </Table>
      </Container>
      </div>
    );
  }
}

export default AssetManagementList;
