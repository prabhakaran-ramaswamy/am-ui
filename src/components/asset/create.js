import React , {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import history from '../../history';

import {assetActionTypes, assetselector} from '../../features/asset';

const AssetCreate = () => {

  const initialVal = useSelector(assetselector.getAsset);

  const dispatch = useDispatch();

  const handleCancel = useCallback(() => {
    dispatch({
      type: assetActionTypes.LIST_ASSET_STARTED,
    });
    history.push("/assets");
  }, [dispatch]);


  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: Yup.object({
      description: Yup.string()
        .min(3, 'Must be 3 characters or greater')
        .max(30, 'Must be 30 characters or less')
        .required('Description value Required'),
        assetNumber: Yup.string()
        .min(3, 'Must be 3 characters or greater')
        .max(30, 'Must be 30 characters or less')
        .required('Asset number value Required'),
        serial: Yup.string()
        .min(3, 'Must be 3 characters or greater')
        .max(30, 'Must be 30 characters or less')
        .required('Serial value Required'),
    }),
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
      <Col><label htmlFor="description">Description</label></Col>
      <Col>
      <input name="description" {...formik.getFieldProps('description')} />
      {formik.touched.description && formik.errors.description ? (
        <div style={{color:'red'}}>{formik.errors.description}</div>
      ) : null}
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col><label htmlFor="assetNumber">Asset Number</label></Col>
      <Col>
      <input name="assetNumber" {...formik.getFieldProps('assetNumber')} />
      {formik.touched.assetNumber && formik.errors.assetNumber ? (
        <div style={{color:'red'}}>{formik.errors.assetNumber}</div>
      ) : null}
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col><label htmlFor="serial">Serial</label></Col>
      <Col>
      <input name="serial" {...formik.getFieldProps('serial')} />
      {formik.touched.serial && formik.errors.serial ? (
        <div style={{color:'red'}}>{formik.errors.serial}</div>
      ) : null}
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col> <label htmlFor="status">status</label></Col>
      <Col>
      <Col> <label htmlFor="status">{formik.values.serial}</label></Col>
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

export default withRouter(AssetCreate);
