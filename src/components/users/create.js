import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  withRouter } from "react-router-dom";
import {
  Container
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
        .required('Required'),
      lastName: Yup.string()
        .min(3, 'Must be 3 characters or greater')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      mobile: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
    <form onSubmit={formik.handleSubmit}>
      <div>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="firstName">First Name</label>
      <input name="firstName" {...formik.getFieldProps('firstName')} />
      </div>
      <div>
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input name="lastName" {...formik.getFieldProps('lastName')} />
      </div>
      <div>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input name="email" {...formik.getFieldProps('email')} />
      </div>
      <div>
      {formik.touched.mobile && formik.errors.mobile ? (
        <div>{formik.errors.mobile}</div>
      ) : null}
      <label htmlFor="mobile">Mobile Number</label>
      <input name="mobile" {...formik.getFieldProps('mobile')} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </Container>
  );
};

export default withRouter(UserCreate);