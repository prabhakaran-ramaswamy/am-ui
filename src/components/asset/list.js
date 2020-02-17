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
import {assetselector} from '../../features/asset';

const AssetList = () => {

  const gotoCreate =()=>{
    history.push("/asset-create");
  };
  const renderTableData=()=> {
    const  assets = useSelector(assetselector.getAssets);
    return assets.map((asset, index) => {
      const {id, description, assetNumber, serial, status} = asset;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{description}</td>
          <td>{assetNumber}</td>
          <td>{serial}</td>
          <td>{status}</td>
        </tr>
      );
    });
  };

    return (
      <Container>
        <ButtonToolbar>
  <Button variant="secondary" onClick={gotoCreate}>Create</Button>
  
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
              <th>assetNumber</th>
              <th>serial</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </Table>
      </Container>
      </Container>
    );
  }

export default withRouter(AssetList);