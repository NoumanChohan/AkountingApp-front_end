import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

 const SixthPage = () => {
  return (
    <Box sx={{width:'100vw',height:'100vh',display:'flex'}}>
        <Card elevation={10} sx={{width:'30%',height:'50%',position:'absolute',mt:'180px',ml:'170px',backgroundImage:'url(https://assets.akaunting.com/site/img/pages/home/akaunting-languages.png)',backgroundSize:'cover'}}></Card>
        <Card elevation={10} sx={{width:'65%',height:'75%',ml:'375px',mt:'100px',backgroundColor:' #5a5097',display:'flex',}}>
        <Box sx={{width:'82%',height:'60%',display:'flex',flexDirection:'column',mt:'170px',ml:'280px'}}>
                <Box sx={{width:'80%',height:'15%'}}><Typography variant='h4' sx={{fontWeight:'800',fontSize:'30px',color:'white'}}>Accounting in 50+ languages</Typography></Box>
                <Box sx={{width:'100%',height:'20%',mt:'10px',color:'white'}}><Typography>Akaunting is translated over 50 languages by its volunteer contributors from all around the world.</Typography></Box>
                <Box sx={{width:'60%',height:'15%',mt:'10px'}}><Button sx={{fontWeight:'bold',width:'50%',height:'100%',fontSize:'12px',backgroundColor:'white',color:'blue'}}  variant='contained'>See Languages</Button></Box>
            </Box>
        </Card>
    </Box>
  )
}

export default SixthPage