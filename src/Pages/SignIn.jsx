import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
  const {LogIn , signIN} = React.useContext(AuthContext)
  const[error , setError] = React.useState('');
 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || '/';

 const handleSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  const bkash = form.bkash.value;
  const course = form.course.value;
  LogIn(email, password,bkash,course)
  .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();

      setError('');
      navigate(from, {replace: true});
  })
  .catch(error => {
     console.error(error)
     setError(error.message)
     
 })
 
}
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     bKash: data.get('bKash'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
         
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             
            />
                <TextField
              margin="normal"
              required
              fullWidth
              id="bkash"
              label="bkash Transaction number"
              name="bkash"
              autoComplete="bkash"
              autoFocus
            />
                <TextField
              margin="normal"
              required
              fullWidth
              id="course"
              label="Course Title"
              name="course"
              autoComplete="course"
              autoFocus
            />


          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}