import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box sx={{ width: '100vw', height: '100vh', backgroundColor: '#F8F8F8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '85%', height: '60%', mt: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '23%', height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey', fontWeight: 'bold' }}>BLOG</Typography></Box>
                    <Box sx={{ width: '98%', height: '11%', }}><Typography sx={{ color: 'grey' }}>What do net 30 payment terms mean?</Typography></Box>
                    <Box sx={{ width: '98%', height: '11%', }}><Typography sx={{ color: 'grey' }}>Accounting Software for Accountants</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>What is a 1099 NEC form used for?</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>What are Billable Hours?</Typography></Box>
                    <Box sx={{ width: '98%', height: '11%', }}><Typography sx={{ color: 'grey' }}>Deciding On Accounting Software for Project Management</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>What are performance metrics?</Typography></Box>

                </Box>
                <Box sx={{ width: '23%', height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey', fontWeight: 'bold' }}>TRENDING APPS</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Bank Feeds</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Double-Entry</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Projects</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Inventory</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Estimates (Quotes)</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Expenses</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Custom Fields</Typography></Box>
                </Box>
                <Box sx={{ width: '23%', height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey', fontWeight: 'bold' }}>RESOURCES</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Plans</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>On-Premise vs Cloud</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Free Tools</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Premium Cloud</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Documentation</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Developers</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Accountants</Typography></Box>
                </Box>
                <Box sx={{ width: '23%', height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey', fontWeight: 'bold' }}>LINKS</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Akaunting 3.0</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Accounting Software</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Open Source Accounting Software</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Free Wave Accounting Alternative</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Online Accounting Software</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Free QuickBooks Alternative</Typography></Box>
                    <Box sx={{ width: '98%', height: '8%', }}><Typography sx={{ color: 'grey' }}>Free FreshBooks Alternative</Typography></Box>
                </Box>
            </Box>
            <Box sx={{ width: '85%', height: '20%', mt: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '45%', height: '60%', mt: '25px', display: 'flex'}}>
                    <Box sx={{ width: '10%', height: '100%', backgroundImage:'url(https://assets.akaunting.com/site/img/logo/akaunting-logo.svg)',backgroundSize:'contain',backgroundRepeat:'no-repeat' }}></Box>
                    <Box sx={{ width: '68%', height: '100%',ml:'5px', display:'flex',flexDirection:'column',justifyContent:'space-evenly' }}>
                        <Typography sx={{width:'100%',height:'30%',color:'grey',fontSize:'10px'}}>Online, open source and free accounting software for small businesses.</Typography>
                        <Typography sx={{width:'100%',height:'30%',color:'grey',fontSize:'10px'}}>Track your income and expenses with ease.</Typography>
                        <Typography sx={{width:'100%',height:'30%',color:'grey',fontSize:'10px'}}>© Akaunting 2022</Typography>
                    </Box>
                </Box>
                 <Box></Box>
            </Box>
              <Box sx={{width:'85%',height:'15%',mt:'auto',display:'flex',justifyContent:'space-between'}}>
                <Box sx={{width:'20%',height:'80%',mt:'10px',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <Typography sx={{color:'grey',fontSize:'small'}}>About</Typography>
                    <Typography sx={{color:'grey',fontSize:'small'}}>Terms</Typography>
                    <Typography sx={{color:'grey',fontSize:'small'}}>Privacy</Typography>
                    <Typography sx={{color:'grey',fontSize:'small'}}>Contact</Typography>
                </Box>
                <Box sx={{width:'20%',height:'80%',mt:'10px',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                <GitHubIcon/>
                <FacebookIcon/>
                <YouTubeIcon/>
                <TwitterIcon/>
                </Box>
              </Box>

        </Box>
    )
}

export default Footer