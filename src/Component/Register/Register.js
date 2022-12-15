import { Button, Card, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterSchema from './RegisterSchema'
const initialValues={
  name:'',
  email:'',
  password:''
}


const Register = () => {
  const navigate=useNavigate();
const  {values,errors,handleChange,handleSubmit,handleBlur}=   useFormik({
        initialValues:initialValues,
       validationSchema:RegisterSchema,
      onSubmit:async (values,action)=>{
           // console.warn(values)
            const res=await axios.post('http://localhost:5000/api/User',values)

            if (res.status===200) {
              action.resetForm();
            navigate('/dashboard')
            }
            
      }
    });
//  console.log(values)
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{width:'100vw',height:'120vh',display:'flex',justifyContent:'center'}}>
    <Box sx={{width:'90%',height:'90%',display:'flex',justifyContent:'space-between'}}>
        <Box sx={{width:'45%',height:'90%',display:'flex',flexDirection:'column'}}>
            <Typography variant='h1' sx={{fontSize:'50px',fontWeight:'800',mt:'130px'}}>Register to Akaunting and meet the ease.</Typography>
            <Typography sx={{fontSize:'18px',color:'grey',mt:'10px'}}>Akaunting is free online accounting software designed to help small businesses easily keep their finances.</Typography>
        </Box>
        <Box sx={{width:'40%',height:'100%',display:'flex',justifyContent:'center'}}>
            <Card elevation={10} sx={{width:'80%',height:'68%',backgroundColor:'white',mt:'150px',px:'22px',display:'flex',flexDirection:'column'}}>
                <Typography sx={{fontWeight:'bold',fontSize:'12px',mt:'40px'}}>Name *</Typography>
            <TextField value={values.name} helperText={errors.name} name='name' onChange={handleChange}  variant="outlined" size='small' sx={{width:'350px'}}/>
            <Typography sx={{fontWeight:'bold',fontSize:'12px',mt:'40px'}}>Email *</Typography>
            <TextField value={values.email} helperText={errors.email} name='email' onChange={handleChange} type="email" variant="outlined" size='small' sx={{width:'350px'}}/>
            <Typography sx={{fontWeight:'bold',fontSize:'12px',mt:'40px'}}>Password *</Typography>
            <TextField value={values.password} helperText={errors.password} name='password' onChange={handleChange} type="password" variant="outlined" size='small' sx={{width:'350px'}}/>
            <FormControlLabel  sx={{color:'grey'}} control={<Checkbox  />} label=" I agree to the Terms of Service and Privacy Policy." />
           <Button type='submit' variant='contained' sx={{mt:'40px'}}>Register</Button>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'8%',mt:'35px',}}>
              <Typography>Already have account</Typography>
              
            </Box>
      
            </Card>
        </Box>
    </Box>
</Box>
    </form>
  )
}

export default Register