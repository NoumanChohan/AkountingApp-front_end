import { Avatar, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

 const FifithPage = () => {
    return (
        <Box sx={{ width: '100vw', height: '100vh',  display: 'flex', justifyContent: 'space-evenly' }}>
            <Box sx={{ width: '50%', height: '80%',  mt: '50px', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '90%', height: '10%',  ml: '55px', mt: '10px' }}><Typography variant='h3' sx={{ fontWeight: '1000', fontSize: '35px' }}>Global SMEs trust Akaunting</Typography></Box>
                <Box sx={{ width: '90%', height: '11%', ml: '55px', color: 'grey',  }}><Typography sx={{ fontSize: '20px' }}>The ease of doing accounting makes Akaunting the favorite of small businesses in different countries.</Typography></Box>
                <Box sx={{ width: '90%', height: '70%', ml: '55px', mt: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Box sx={{  width: '100%', height: '25%', display: 'flex',  }}>
                        <Box sx={{  width: '10%', height: '100%' }}>
                            <Avatar sx={{width:'70%',height:'50%'}}><PublicIcon/></Avatar>
                        </Box>
                        <Box sx={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '80%', height: '35%',  display: 'flex', alignItems: 'center' }}><Typography variant='h4' sx={{ fontSize: '20px',fontWeight:'bold' }}>100+ Countries</Typography></Box>
                            <Box sx={{ width: '100%', height: '50%',  display: 'flex', alignItems: 'center' }}><Typography sx={{ fontSize: '14px',color:'grey' }}>A diverse user-base around the world trust Akaunting to handle everyday bookkeeping needs.</Typography></Box>
                        </Box>
                    </Box>
                    <Box sx={{  width: '100%', height: '25%', display: 'flex' }}>
                    <Box sx={{  width: '10%', height: '100%',dispaly:'flex' }}>
                    <Avatar sx={{width:'70%',height:'50%'}}><PeopleAltIcon/></Avatar>
                        </Box>
                        <Box sx={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '80%', height: '35%', display: 'flex', alignItems: 'center' }}><Typography variant='h4' sx={{ fontSize: '20px',fontWeight:'bold' }}>200K+ Users</Typography></Box>
                            <Box sx={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center' }}><Typography sx={{ fontSize: '14px',color:'grey' }}>Freelancers offering services to individuals/companies or a 2+ person company, use Akaunting to simplify day-to-day bookkeeping workflow.</Typography></Box>
                        </Box>
                    </Box>
                    <Box sx={{  width: '100%', height: '25%', display: 'flex' }}>
                    <Box sx={{  width: '10%', height: '100%',dispaly:'flex' }}>
                    <Avatar sx={{width:'70%',height:'50%'}}><InsertDriveFileIcon/></Avatar>
                        </Box>
                        <Box sx={{  width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Box sx={{ width: '80%', height: '35%', display: 'flex', alignItems: 'center' }}><Typography variant='h4' sx={{ fontSize: '20px',fontWeight:'bold' }}>10M+ Invoices Sent</Typography></Box>
                            <Box sx={{ width: '100%', height: '50%',  display: 'flex', alignItems: 'center' }}><Typography sx={{ fontSize: '14px',color:'grey' }}>With no limits, users send invoices and receive timely payments for free.</Typography></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Card elevation={10} sx={{ width: '40%', height: '80%', backgroundImage: 'url(https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVhcnRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)', backgroundSize: 'cover', mt: '50px' }}></Card>
        </Box>
    )
}

export default FifithPage