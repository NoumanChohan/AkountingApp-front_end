import { CheckBox, Label } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, FormControlLabel,  TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import SignInSchema from './SignInSchema'


const initialValues={
    email:'',
    password:''
}
const SignIn = () => {


   
    const {values,errors,handleSubmit,handleChange}=useFormik({
        initialValues:initialValues,
        validationSchema:SignInSchema,
        onSubmit:async (values,action)=>{

            const res=await axios.post('http://localhost:5000/api/LoginUser',values)
            console.log( res.data)
            if (res.status===200) {
                console.log(values)
         action.resetForm()
         
            }
        }
        
    })
 
    


  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{width:'100vw',height:'120vh',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:'90%',height:'90%',display:'flex',justifyContent:'space-between'}}>
            <Box sx={{width:'45%',height:'90%',display:'flex',flexDirection:'column'}}>
                <Typography variant='h1' sx={{fontSize:'50px',fontWeight:'800',mt:'130px'}}>Login to track your finances efficiently.</Typography>
                <Typography sx={{fontSize:'18px',color:'grey',mt:'10px'}}>Akaunting is free online accounting software designed to help small businesses easily keep their finances.</Typography>
            </Box>
            <Box sx={{width:'40%',height:'100%',display:'flex',justifyContent:'center'}}>
                <Card elevation={10} sx={{width:'80%',height:'68%',backgroundColor:'white',mt:'150px',px:'22px',display:'flex',flexDirection:'column'}}>
                    <Typography sx={{fontWeight:'bold',fontSize:'12px',mt:'40px'}}>Email *</Typography>
                <TextField value={values.email} helperText={errors.email} name='email' onChange={handleChange} type="email" variant="outlined" size='small' sx={{width:'350px'}}/>
                <Typography sx={{fontWeight:'bold',fontSize:'12px',mt:'40px'}}>Password *</Typography>
                <TextField  value={values.password} helperText={errors.password} name='password' type="password" onChange={handleChange} variant="outlined" size='small' sx={{width:'350px'}}/>
                <FormControlLabel control={<Checkbox  />} label="Remember Me" />
                <Button type='submit' variant='contained' sx={{mt:'40px'}}>Login</Button>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'8%',mt:'35px'}}>
                    <Link  style={{textDecoration:'none'}}><Typography>Forgot Password</Typography></Link>
                    <Link to={'/register'} style={{textDecoration:'none'}}><Typography></Typography>Register as new</Link>
                </Box>
          
                </Card>
            </Box>
        </Box>
    </Box>
    </form>
  )
}

export default SignIn