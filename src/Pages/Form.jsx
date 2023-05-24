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
import { Input } from '@mui/material';



export default function Form() {
  const theme = createTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
   const [course , setCourse] = React.useState("")
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // const email = form.email.value;
    // const password = form.password.value;
    const bkash = form.bkash.value;
    const course = form.course.value;
    const user = {
      bkash: bkash,
      course: course
    }
    form.reset();
    if (bkash.length < 10) {
      alert('transaction Id contain at least 10 characters');
      return;
    }


  }


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
         
          <Typography component="h1" variant="h5">
            Please Fill Up the Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          
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
         
           <Grid item xs={12}>
              <select className="bg-none"  margin="normal"
              required
              fullWidth
              id="course"
              label="Course Title"
              name="course"
              autoComplete="course"
              autoFocus  onChange={setCourse}>
                 <option value="select">Select your course</option>
                 <option value="FastAPI MongoDB and Python">Modern APIs with FastAPI MongoDB and Python</option>
                 <option value="Jump Into Data Science in Python">Jump Into Data Science in Python</option>
                 <option value="UX Intensive">UX Intensive</option>
                 <option value="Mastering Software Engineering">Mastering Software Engineering</option>
              </select>
              </Grid>

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
              <Link href="/" variant="contained" sx={{ color: 'white' }}>
               Submit
              </Link>

            </Button>

            <Grid container>
              
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}