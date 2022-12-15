import React from 'react'
import * as Yup from 'yup';

const RegisterSchema = () => {
  return Yup.object({
    name:Yup.string().required('Enter Your Name').min(3,'Name is too short').max(15,'Name is too long'),
    email:Yup.string().required('Enter Your Email').min(13,'Email is too short').max(30,'Email is too long').email('Invalid Email'),
    password:Yup.string().required('Enter Your password').min(7,'password is too short').max(15,'password is too long'),

  })
}

export default RegisterSchema