import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

 const ThirdPage = () => {
  return (
    <Box sx={{ width: '100vw', height: '90vh',  display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '85%', height: '90%',  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '50%', height: '6%',  display: 'flex', justifyContent: 'center', mt: '5%' }}>
          <Typography variant='h4' sx={{ fontSize: '29px', fontWeight: '800' }}>Feature Rich</Typography>
        </Box>
        <Box sx={{ width: '46%', height: '9%',  display: 'flex', justifyContent: 'center', mt: '20px', textAlign: 'center' }}>
          <Typography sx={{ color: 'grey' }}>Everything you need to manage your web accounting. Keep track of all of your payments, invoices, expenses, etc. in one place with zero fees.</Typography>
        </Box>

        <Grid container spacing={2} sx={{  mt: '20px', }}>
          <Grid item xs={12} sm={4} md={6} >
            <Sample icon={<ShuffleIcon/>} hadding={'Cash Flow'} description={'Stay on top of your Cashflow and make smarter decisions about your business.'} />

          </Grid>

          <Grid item xs={12} sm={4} md={6} >
            <Sample icon={<ErrorOutlineIcon/>} hadding={'Easy Invoicing'} description={'Amaze your clients with professional looking invoices and get paid faster.'} />

          </Grid>
          <Grid item xs={12} sm={4} md={6} >
            <Sample icon={<InsertDriveFileIcon/>} hadding={'Expense Tracking'} description={'Keep track of your mounting bills & expenses and the money flowing out.'}/>

          </Grid>
          <Grid item xs={12} sm={4} md={6} >
            <Sample icon={<InsertDriveFileIcon/>} hadding={'Transaction Categories'} description={'Create categories for incomes, expenses and items and see the flow at a glance.'}/>

          </Grid>
        </Grid>

      </Box>
    </Box>
  )
}

export default ThirdPage


const Sample = (props) => {
  return (
    <Box sx={{ height: '10vh',  display: 'flex', }}>
      <Box sx={{ height: "100%", width: '10%', display:'flex',justifyContent:'center',backgroundColor:'grey',alignItems:'center'}}>
      {props.icon}
      </Box>
      <Box sx={{ height: "100%", width: '80%', dispaly:'flex',ml:'15px',flexDirection:'column' }}>
       <Box sx={{width:'60%',height:'30%',}}><Typography sx={{fontWeight:'bold'}}>{props.hadding}</Typography></Box>
       <Box sx={{width:'100%',height:'70%',}}><Typography sx={{color:'grey'}}>{props.description}</Typography></Box>
      </Box>
    </Box>
  )
}


