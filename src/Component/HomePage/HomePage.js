import { AppBar, Box, Button, Toolbar, Tooltip, Typography } from "@mui/material"

import React from 'react'
import WebAppBar from "../CommonComponents/WebAppBar/WebAppBar"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"
import FourthPPage from "./FourthPPage"
import FifithPage from "./FifithPage"
import SixthPage from "./SixthPage"
import Footer from "../CommonComponents/WebAppBar/Footer"

const HomePage = () => {
  return (
    <Box>
            
            <FirstPage/>
            <SecondPage/>
            <ThirdPage/>
            
            <FourthPPage/>
            <FifithPage/>
            <SixthPage/>
            
    </Box>
  )
}

export default HomePage