import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import logo from '../asset/logo.svg';
import { Image } from 'mui-image';
import FlexBetween from './FlexBetween';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';



export default function ButtonAppBar() {
    const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static" mx={10}>
     
        <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBetween>
     <Link to="/">   <Image src={logo} height={35} width={200} /></Link>
        </FlexBetween>
     
           <FlexBetween>
           <Link to="/signIn"><Button variant='white'sx={{ color: theme.palette.text.white}} > Login</Button></Link>
           <Link to="/signUp"><Button variant='white'sx={{ color: theme.palette.text.white}} >Signup</Button></Link>

         </FlexBetween>
       </Toolbar>
     
        
      </AppBar>
    </Box>
  );
}