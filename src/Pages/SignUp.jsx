import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

export default function SignUp() {
const {createUser  , verifyEmail , signIN} = React.useContext(AuthContext);

const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || '/signIn';

 const[error , setError] = React.useState('');
 const[accepted , setAccepted] = React.useState(false);



  const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;

      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);
     
      createUser(email, password)
      .then( result => {
          const user = result.user;
          alert('Please Verify your email before login');
          console.log(user);
          form.reset();

          handleEmailVerification();
          alert('Successfully Registered')
          setError('');
         navigate(from, {replace: true});
         
          
      })
      .catch( e => {
          alert(e)
          setError(e.message)

      });
      
      
  }

 
  const handleEmailVerification  = () => {
     verifyEmail()
     .then(() =>{})
     .catch(error => console.error(error));
 }

 const handleAccepted = event => {
     setAccepted(event.target.checked)
 }

 
  
     
            
         
     
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox onClick={handleAccepted} value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!accepted}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
              <Typography variant='red'>{error}</Typography>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}