import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import history from '../../history';

const AssetManagementCreate = () => {
    const formik = useFormik({
      initialValues: {
        id:'',
        description: '',
        assetNumber:'',
        assetId: '',
        accountId: '',
      },
      validationSchema: Yup.object({
        description: Yup.string()
          .min(3, 'Must be 3 characters or greater')
          .max(30, 'Must be 30 characters or less')
          .required('Asset value Required'),
          assetNumber: Yup.string()
          .min(3, 'Must be 3 characters or greater')
          .max(30, 'Must be 30 characters or less')
          .required('Account number value Required'),
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
        <Col><label htmlFor="assetId">Asset</label></Col>
        <Col>
        <input name="assetId" {...formik.getFieldProps('assetId')} />
        {formik.touched.description && formik.errors.assetId ? (
          <div style={{color:'red'}}>{formik.errors.assetId}</div>
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
        <Col><label htmlFor="accountId">Account</label></Col>
        <Col>
        <input name="accountId" {...formik.getFieldProps('accountId')} />
        {formik.touched.accountId && formik.errors.accountId ? (
          <div style={{color:'red'}}>{formik.errors.accountId}</div>
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
        <Col> <label htmlFor="description">Description</label></Col>
        <Col>
        <Col> <label htmlFor="description">{formik.values.description}</label></Col>
        </Col>
        </Row>
        </Col>
        <Col></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col>
        <Row>
        <Col> <label htmlFor="assetNumber">Description</label></Col>
        <Col>
        <Col> <label htmlFor="assetNumber">{formik.values.assetNumber}</label></Col>
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
        <button type="button" className="mr-2" onClick={()=>{history.push("/asset-user-list");}}>Cancel</button>
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

