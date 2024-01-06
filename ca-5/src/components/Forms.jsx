import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Forms({ setShowBook }) {
  const [formSubmit, setFormSubmit] = useState(false);
  const [formErr, setFormErr] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const firstNameHandler = (e) => {
    setFormData({
      ...formData,
      firstName: e.target.value,
    });
  };

  const lastNameHandler = (e) => {
    setFormData({
      ...formData,
      lastName: e.target.value,
    });
  };

  const emailHandler = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const phoneHandler = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const passwordHandler = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const confirmPasswordHandler = (e) => {
    setFormData({
      ...formData,
      confirmPassword: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let errors = validate(formData);
    setFormErr(errors);

    let errKeyArray = Object.keys(errors);
    setShowBook(true);
    navigate("/");
    if (errKeyArray.length === 0) {
      setFormSubmit(true);
      // onSubmitSuccess();
    } else {
      setFormSubmit(false);
    }
    localStorage.setItem(
      'userData',
      JSON.stringify(formData)
    );
  };


  const validate = (data) => {
    let error = {};

    if (data.firstName.trim() === '') {
      error.firstName = 'Please enter your First Name';
    }
    if (data.lastName.trim() === '') {
      error.lastName = 'Please enter your Last Name';
    }
    if (data.email.trim() === '') {
      error.email = 'Please enter your Email';
    }
    if (data.phone.trim() === '') {
      error.phone = 'Please enter your Phone number';
    }
    if (data.phone.trim().length !== 10) {
      error.phone = 'Please enter a 10-digit Phone number';
    }
    if (data.password.trim().length < 8) {
      error.password = 'Please enter a minimum 8-digit Password';
    }
    if (data.password.trim() === '') {
      error.password = 'Please enter your Password';
    }
    if (data.confirmPassword.trim() === '') {
      error.confirmPassword = 'Please confirm your Password';
    }
    if (data.password !== data.confirmPassword) {
      error.confirmPassword = 'Passwords do not match';
    }

    return error;
  };

  return (
    <div className='form-container'>
      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={formSubmitHandler}>
          {formSubmit && (
            <div className='success'>
              <p>Registration Successful</p>
            </div>
          )}

          <label>First Name: </label>
          <input type='text' name='firstName' onChange={firstNameHandler} />
          {formErr.firstName && <p className='err'>{formErr.firstName}</p>}

          <label>Last Name: </label>
          <input type='text' name='lastName' onChange={lastNameHandler} />
          {formErr.lastName && <p className='err'>{formErr.lastName}</p>}

          <label>Email: </label>
          <input type='email' name='email' onChange={emailHandler} />
          {formErr.email && <p className='err'>{formErr.email}</p>}

          <label>Phone: </label>
          <input type='number' name='phone' onChange={phoneHandler} />
          {formErr.phone && <p className='err'>{formErr.phone}</p>}

          <label>Password: </label>
          <input type='password' name='password' onChange={passwordHandler} />
          {formErr.password && <p className='err'>{formErr.password}</p>}

          <label>Confirm Password: </label>
          <input
            type='password'
            name='confirmPassword'
            onChange={confirmPasswordHandler}
          />
          {formErr.confirmPassword && (
            <p className='err'>{formErr.confirmPassword}</p>
          )}

          <input type='submit' value={'Register'} />
        </form>
      </fieldset>
    </div>
  );
}
