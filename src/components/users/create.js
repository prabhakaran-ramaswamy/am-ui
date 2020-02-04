import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';


const UserCreate = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      id:'',
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'Must be 3 characters or greater')
        .max(30, 'Must be 30 characters or less')
        .required('First Name value Required'),
      lastName: Yup.string()
        .min(3, 'Must be 3 characters or greater')
        .max(30, 'Must be 30 characters or less')
        .required('Last Name value Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('email value Required'),
      mobile: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Mobile value Required'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
    <form onSubmit={formik.handleSubmit}>
      <Row>
      <Col></Col>
      <Col>
      <Row>
      <Col><label htmlFor="firstName">First Name</label></Col>
      <Col>
      <input name="firstName" {...formik.getFieldProps('firstName')} />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
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
      <Col><label htmlFor="lastName">Last Name</label></Col>
      <Col>
      <input name="lastName" {...formik.getFieldProps('lastName')} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
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
      <Col><label htmlFor="email">Email Address</label></Col>
      <Col>
      <input name="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
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
      <Col> <label htmlFor="mobile">Mobile Number</label></Col>
      <Col>
      <input name="mobile" {...formik.getFieldProps('mobile')} />
      {formik.touched.mobile && formik.errors.mobile ? (
        <div>{formik.errors.mobile}</div>
      ) : null}
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
      <button type="submit">Cancel</button>
      
      <button type="submit">Submit</button>
      </Col>
      </Row>
      </Col>
      <Col></Col>
      </Row>
    </form>
    </Container>
  );
};

export default withRouter(UserCreate);