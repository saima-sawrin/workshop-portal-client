
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
 import logo from '../asset/logo.svg';
 import { Image } from 'mui-image';
 import FlexBetween from './FlexBetween';
 import { AuthContext } from '../Context/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {user , LogOut} = React.useContext(AuthContext);
  // const users = useLoaderData();
  // const {role} = users;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogOut =()=>{
    LogOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
         

          <FlexBetween>
           {
            user?.uid?
            <><IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton></>:<></>
           }
           
         
          
         <Link to="/">   <Image src={logo} height={35} width={200} /></Link>
        </FlexBetween>
     
        <FlexBetween>
         {
          user?.uid?
          <> <Button  className='text-decoration-none mx-3 text-' variant="primary" onClick={handleLogOut}>Log out</Button></> : 
          <> 
          <Link to="/signIn"><Button variant='white'sx={{ color: theme.palette.text.white}} >Login</Button></Link>
          <Link to="/signUp"><Button variant='white'sx={{ color: theme.palette.text.white}} >Register</Button></Link></>
         }
           {user?.photoURL?
                          
                          <Image
                              style={{ height: '30px' }}
                              roundedCircle
                              title= {user.displayName}
                              src={user.photoURL}>
                          </Image>
                   
                          : <><i class="fa fa-user" aria-hidden="true"></i></>
                      }
        
         </FlexBetween>
      
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['addWorkshop', 'AllExpert', 'Attendance'].map((text, index) => (
            <ListItem key={text} >
             <Link to={`/${text}`}>
             <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
             </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
     
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
   

      
      </Main>
    </Box>
  );
}


