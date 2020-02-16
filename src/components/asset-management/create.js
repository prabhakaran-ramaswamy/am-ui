import React , {useCallback} from 'react';
import { useFormik } from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {  withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import history from '../../history';
import {actionTypes, selectors} from '../../features/manage_asset';
const AssetManagementCreate = () => {
  const assetList = [
    {
        id: 300,
        description: 'Laptop',
        assetNumber:1
    }, {
        id: 200,
        description: 'Mobile',
        assetNumber:2
    }, {
        id: 100,
        description: 'Server',
        assetNumber:3
    }, {
        id: 400,
        description: 'Desktop',
        assetNumber:4
    }
    ];
    const accountList = [
      {
          id: 300,
          firstName: 'Peter',
          lastName: 'P'
      }, {
          id: 200,
          firstName: 'Saravanan',
          lastName: 'R'
      }, {
          id: 100,
          firstName: 'Prabhakaran',
          lastName: 'R'
      }, {
          id: 400,
          firstName: 'Ramaswamy',
          lastName: 'M'
      }
      ];
    function getAssetOptions( options ) {
        return (
            options.map(option => 
                        <option key={option.id} value={option.id}>                                   
                        {option.description} - { option.assetNumber}
                        </option>)
                       );
    }
    function getAccountOptions( options ) {
      return (
          options.map(option => 
                      <option key={option.id} value={option.id}>                                   
                      {option.firstName} {option.lastName}
                      </option>)
                     );
  }

  
  const initialVal = useSelector(selectors.getMangedAssetValue);

  const dispatch = useDispatch();

  const handleCancel = useCallback(() => {
    dispatch({
      type: actionTypes.LIST_MANAGE_ASSET_STARTED,
    });
    history.push("/asset-user-list");
  }, [dispatch]);

    const formik = useFormik({
      initialValues:initialVal,
      onSubmit: values => {
        console.log(JSON.stringify(values, null, 2));
      },
    });
    return (
      <Container>
       <form onSubmit={formik.handleSubmit}>
        <Row>
        <Col ></Col>
        <Col md="auto">
        <Row>
        <Col><label htmlFor="asset.id">Asset</label></Col>
        <Col>
        <select
        name="asset.id"
        {...formik.getFieldProps('asset.id')}>
        {getAssetOptions(assetList)}
      </select>
        </Col>
        </Row>
        </Col>
        <Col></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col md="auto">
        <Row>
        <Col><label htmlFor="account.id">Account</label></Col>
        <Col>
        <select name="account.id" {...formik.getFieldProps('account.id')} >
        {getAccountOptions(accountList)}
      </select>       
        </Col>
        </Row>
        </Col>
        <Col></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col>
        <Row className="justify-content-md-center">
        <Col md="auto">
        <button type="button" className="mr-2" onClick={handleCancel}>Cancel</button>
        <button type="submit" >Submit</button>
        </Col>
        </Row>
        </Col>
        <Col></Col>
        </Row>
      </form>
      </Container>
    );
  };

export default withRouter(AssetManagementCreate);

