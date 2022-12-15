import { yupToFormErrors } from 'formik'
import React from 'react'

const SignInSchema = () => {
  return Yup.object ({
    email:Yup.string().required("enter your email").email(),
    password:Yup.string().min(7,'too short password').max(15,'too long password').required()
  })
    
}

export default SignInSchema