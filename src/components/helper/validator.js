import * as Yup from 'yup';

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const accountValidationSchema = Yup.object({
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
  });