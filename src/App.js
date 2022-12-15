import logo from './logo.svg';
import './App.css';
import HomePage from './Component/HomePage/HomePage.js';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Component/SignIn/SignIn';
import WebAppBar from './Component/CommonComponents/WebAppBar/WebAppBar';
import Footer from './Component/CommonComponents/WebAppBar/Footer';
import Register from './Component/Register/Register'
import DashBoard from './Component/Dashboard/DashBoard';

function App() {
  return (
    <Box >
      <WebAppBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<DashBoard/>}></Route>
      </Routes>
     <Footer/>
    </Box>
  );
}

export default App;
