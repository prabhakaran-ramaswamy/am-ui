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
import {actionTypes, maselector} from '../../features/manage_asset';
import { assetselector} from '../../features/asset';
import { accountselector} from '../../features/account';

const AssetManagementCreate = () => {
     const getAssetOptions = () => {
        const assets = useSelector(assetselector.getAssets);
        return (
          assets.map(option => 
                        <option key={option.id} value={option.id}>                                   
                        {option.description} - { option.assetNumber}
                        </option>)
                       );
    }
    const  getAccountOptions = () => {
      const accounts = useSelector(accountselector.getAccounts);
      return (
        accounts.map(option => 
                      <option key={option.id} value={option.id}>                                   
                      {option.firstName} {option.lastName}
                      </option>)
                     );
  }

  
  const initialVal = useSelector(maselector.getMangedAsset);

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
        {getAssetOptions()}
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
        {getAccountOptions()}
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

