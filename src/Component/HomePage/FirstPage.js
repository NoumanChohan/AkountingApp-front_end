import { Box, Button, Card, Typography } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'

const FirstPage = () => {
  return (
    <Box sx={{ width: '100vw', height: '120vh',  display: 'flex', justifyContent: 'end' }}>
      <Box sx={{ width: '94%', height: '100%',  display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>

          <Box sx={{ width: '50%', height: '100%',  display: 'flex', flexDirection: 'column' }}>


            <Box sx={{ width: '100%', height: '4%',  mt: '40%', ml: '1%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>

              <Box sx={{ width: '18%', height: '80%', display: 'flex', alignItems: 'center',  justifyContent: 'center' }}>
                <Typography variant='button' sx={{ height: '70%', width: '80%', fontSize: '12px', fontWeight: 'bold',  color: 'blue', display: 'flex', alignItems: 'center' }}>WHAT'S NEW</Typography>
              </Box>

              <Box sx={{ width: '78%', height: '70%',  display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: 'small', color: 'blue', fontWeight: 'bold' }}>Akaunting 3.0 is live! Discover Akaunting with a better UI & UX.</Typography>
              </Box>

            </Box>

            <Box sx={{ width: '70%', height: '14%', mt: '2%', ml: '4%' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color: 'blue' }}>Free Accounting Software</Typography>
            </Box>

            <Box sx={{width: '90%', height: '7%',ml:'4%',mt:'4%'}}>
              <Typography sx={{fontSize:'20px'}}>Akaunting is a free, open-source, and online accounting software for small businesses and freelancers.</Typography>
            </Box>
            <Box sx={{width:'35%',height:'6%',ml:'4%',mt:'4%'}}>
            <Button variant='contained' sx={{fontWeight:'bold',width:'100%',height:'100%',fontSize:'12px',backgroundColor:'green'}}>Get Started</Button>
            </Box>
          </Box>

          <Box sx={{ width: '50%', height: '100%',  }}>
           <Card elevation={10} sx={{width:'100%',height:'80%',mt:'20%',ml:'auto',backgroundImage:'url(https://assets.akaunting.com/site/img/pages/home/akaunting-dashboard.png)',backgroundSize:'cover' }}></Card>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FirstPage