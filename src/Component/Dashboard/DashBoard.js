
import { Button, Card, TextField } from '@mui/material';


import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DashBoard = () => {
  try {
    const data =axios.get('https://jsonplaceholder.typicode.com/albums')
    return data  
  } catch (error) {
    
  }
  

  return (
    <Box sx={{height:'100vh',width:'100vw',backgroundColor:'green'}}>
   
             <Card sx={{height:'20%',width:'30%',background:'orange'}}>
             
             
       
             </Card>
    

      
      
      

    </Box>
  )
}

export default DashBoard

