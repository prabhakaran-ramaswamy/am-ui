import React from 'react';
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
import {maselector} from '../../features/manage_asset';


const AssetManagementList = () => {
 
  const gotoCreate =()=>{
    history.push("/asset-management-create");
  };

  const renderTableData=()=> {
    const  manage_assets = useSelector(maselector.getMangedAssets);
    return manage_assets.map((ma, index) => {
      const {id} = ma;
      const { description, assetNumber}=ma.asset;
      const { firstName, lastName}=ma.account;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{description}</td>
          <td>{assetNumber}</td>
      <td>{firstName} {lastName}</td>
        </tr>
      );
    });
  }
    return (
      <Container>
      <ButtonToolbar>
<Button variant="secondary" onClick={gotoCreate}>Create</Button>

</ButtonToolbar>
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
              <th>assetNumber</th>
              <th>taggedTo</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </Table>
      </Container>
      </Container>
    );
  }


export default AssetManagementList;
