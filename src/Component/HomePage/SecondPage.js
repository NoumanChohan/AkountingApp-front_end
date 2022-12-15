import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LanguageIcon from '@mui/icons-material/Language';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SecondPage = () => {
    return (
        <Box sx={{ width: '100vw', height: '190vh',  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: '70%', backgroundColor: '#F8F8F8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: '50%', height: '5%', mt: '130px', textAlign: 'center', justifyContent: 'center' }}>
                    <Typography variant='h5' sx={{ fontWeight: '800', fontSize: '30px' }}>Free Bookkeeping Software for SMEs</Typography>
                </Box>
                <Box sx={{ width: '55%', height: '6%',  mt: '15px', textAlign: 'center' }}>
                    <Typography variant='h5' sx={{ fontSize: '19px', color: 'grey' }}>From invoicing to expense tracking to accounting, Akaunting has all the tools you need to manage your money online, for free.</Typography>
                </Box>
                <Card elevation={10} sx={{ width: '85%', height: '100%', mt: '15px', backgroundImage: 'url(https://assets.akaunting.com/site/img/pages/home/akaunting-invoice.png)', backgroundSize: 'cover' }}>

                </Card>
            </Box>
            <Box sx={{ width: '85%', height: '20%', display: 'flex', justifyContent: 'space-between', mt: '60px' }}>
                <Card elevation={10} sx={{ height: '85%', width: '30%', display: 'flex', flexDirection: 'column',justifyContent:'space-between' }}>
                    <Box  sx={{ width: '4%', height: '10%',backgroundColor: 'grey', position:'absolute',ml:'15px',mt:'-30px',display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}><FavoriteBorderIcon fontSize='small'/></Box>
                    <Box sx={{ width: '90%', height: '15%', mt:'50px',ml:'15px' }}><Typography sx={{fontWeight:'bold',fontSize:'20px'}}>Free</Typography></Box>
                    <Box sx={{ width: '90%', height: '55%',ml:'15px' }}><Typography sx={{color:'grey'}}>That's right, completely free. There is no limited or trial version, only full. No hidden charges or setup fees. No countdown. Free means free.</Typography></Box>
                </Card>


                <Card elevation={10} sx={{ height: '85%', width: '30%',display: 'flex', flexDirection: 'column',justifyContent:'space-between' }}>
                    <Box sx={{ width: '4%', height: '10%',backgroundColor: 'grey', position:'absolute',ml:'15px',mt:'-30px',display:'flex',alignItems:'center',justifyContent:'center',color:'white' }}><LanguageIcon fontSize='small'/></Box>
                    <Box sx={{ width: '90%', height: '15%', mt:'50px',ml:'15px' }}><Typography sx={{fontWeight:'bold',fontSize:'20px'}}>Online</Typography></Box>
                    <Box sx={{ width: '90%', height: '55%', ml:'15px' }}><Typography sx={{color:'grey'}}>See your financials online anytime, anywhere on your computer, tablet or phone. Run your business from anywhere and know your cash position.</Typography></Box>
                </Card>


                <Card elevation={10} sx={{  height: '85%', width: '30%',display: 'flex', flexDirection: 'column',justifyContent:'space-between' }}>
                    <Box sx={{ width: '4%', height: '10%',backgroundColor: 'grey', position:'absolute',ml:'15px',mt:'-30px',display:'flex',alignItems:'center',justifyContent:'center',color:'white' }}><VisibilityIcon fontSize='small'/></Box>
                    <Box sx={{ width: '90%', height: '15%',mt:'50px',ml:'15px' }}><Typography sx={{fontWeight:'bold',fontSize:'20px'}}>Open Source</Typography></Box>
                    <Box sx={{ width: '90%', height: '55%',ml:'15px' }}><Typography sx={{color:'grey'}}>As we talk about your financials, you must be sure that data is in safe and software doesn't abuse them. Open Source software provides you full privacy.</Typography></Box>
                </Card>
            </Box>
        </Box>
    )
}

export default SecondPage