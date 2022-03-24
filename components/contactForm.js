import React from 'react';
import { useFormik } from 'formik';

import styles from '../styles/Home.module.css';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'Must be more than 3 characters';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 4) {
    errors.lastName = 'Must be more than 4 characters';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length < 10) {
    errors.message = 'Must be more than 10 characters';
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          type='firstName'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lastName'
          name='lastName'
          type='lastName'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor='subject'>Subject</label>
        <select
          id='subject'
          name='subject'
          type='subject'
          onChange={formik.handleChange}
          value={formik.values.subject}
        >
          <option value='default'>Select subject</option>
          <option value='general'>General</option>
          <option value='other'>Other</option>
        </select>
        {formik.errors.subject ? <div>{formik.errors.subject}</div> : null}
        <label htmlFor='message'>Message</label>
        <input
          id='message'
          name='message'
          type='message'
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        {formik.errors.message ? <div>{formik.errors.message}</div> : null}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
