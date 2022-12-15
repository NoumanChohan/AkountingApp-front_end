import { Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

 const FourthPPage = () => {
  return (
    <Box sx={{width:'100vw',height:'100vh',display:'flex',justifyContent:'space-between'}}>
        <Box sx={{width:'40%',height:'100%',display:'flex',justifyContent:'end'}}>
            <Box sx={{width:'82%',height:'60%',display:'flex',flexDirection:'column',mt:'200px'}}>
                <Box sx={{width:'80%',height:'15%'}}><Typography variant='h4' sx={{fontWeight:'800',fontSize:'50px'}}>Client Portal</Typography></Box>
                <Box sx={{width:'100%',height:'20%',mt:'10px',color:'grey'}}><Typography>Give your clients the ease of client portal. Share the transactions and invoices with your clients and accept bulk payments.</Typography></Box>
                <Box sx={{width:'80%',height:'15%',mt:'10px'}}><Button sx={{fontWeight:'bold',width:'70%',height:'100%',fontSize:'12px',backgroundColor:'green'}}  variant='contained' color='primary'>Get Started</Button></Box>
            </Box>
        </Box>
        <Card elevation={10} sx={{width:'55%',height:'80%',backgroundImage:'url(https://assets.akaunting.com/site/img/pages/home/akaunting-client-portal.png)',backgroundSize:'cover'}}></Card>
    </Box>
  )
}

export default FourthPPage