import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const WebAppBar = () => {
    return (
        <Box sx={{ width: '90vw',  height: '10vh' }}>

            <AppBar elevation={5} sx={{ display: 'flex', alignItems: 'center',backgroundColor:'white' }}>
                <Toolbar variant="regular" sx={{ width: '85%',height:'4rem', display: 'flex', justifyContent: 'space-between',alignItems:'center', backgroundColor: 'white' }} >
                    <Box sx={{ width: '20%', height: '90%', backgroundColor:'green'}}><img src="https://assets.akaunting.com/site/img/logo/akaunting-logo-horizontal.svg" width='100%' height='100%'></img></Box>
                    <Box sx={{ width: '40%', height: '90%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center',color:'grey', }}>
                        <Typography sx={{fontWeight:'bold',cursor:'wait'}}>Apps</Typography>
                        <Typography sx={{fontWeight:'bold'}}>Features</Typography>
                        <Typography sx={{fontWeight:'bold'}}>Support</Typography>
                        <Typography sx={{fontWeight:'bold'}}>Blog</Typography>
                    </Box >
                    <Box sx={{ width: '20%', height: '90%',  display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                      <Link to={'/signIn'}>  <Button variant="text" sx={{fontWeight:'bold',color:'grey'}}>Login</Button></Link>
                        <Button  variant="contained" sx={{fontWeight:'bold',height:'80%'}}>Get Started</Button>
                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default WebAppBar