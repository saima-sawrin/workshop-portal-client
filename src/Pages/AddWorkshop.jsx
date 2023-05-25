import { Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import { useAddEventMutation } from '../API/EventApi';

function AddWorkshop() {
    const theme = createTheme();
    const workshop = useLoaderData();
    const {Title , Description , Date , Location , host , aboutHost, course ,overview ,forWhom } = workshop;
    const [postWorkshop , {isLoading ,isError ,isSuccess}] = useAddEventMutation();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const Date = form.Date.value;
    const Location = form.Location.value;
    const host = form.host.value;
    const aboutHost = form.aboutHost.value;
    const course = form.course.value;
    const overview = form.overview.value;
    const forWhom = form.forWhom.value;
    form.reset();
    const workshop = {
        Title: title,
        Description : description,
        Date : Date,
        Location : Location,
        host : host,
        aboutHost: aboutHost,
        course:  course,
        overview: overview,
        forWhom: forWhom

    }
  //   fetch('https://server-eight-delta.vercel.app/events',{
  //     method:'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(workshop),
  // })
  // .then(res=> res.json())
  // .then(data=> {
  //     if(data.acknowledged){
  //         alert('successfully added')
  //         event.target.reset();
  //     }
  // })
   fetch(()=>{
    if(isLoading){
      alert("Posting......",{ id: "addWorkshop"});
    }
    if(isError){
      alert("add workshop",{ id: "addWorkshop"});
      event.target.reset();
    }
   })
  postWorkshop(workshop);

  }
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           
            <Typography component="h1" variant="h5">
              Add workshop details
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="workshop title"
                name="title"
                autoComplete="title"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Date"
                label="Workshop Date"
                name="Date"
                autoComplete="Date"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Location"
                label="Workshop Place"
                name="Location"
                autoComplete="Location"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="host"
                label="Host Name"
                name="host"
                autoComplete="host"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="aboutHost"
                label="About Host"
                name="aboutHost"
                autoComplete="aboutHost"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="course"
                label="course"
                name="course"
                autoComplete="course"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="overview"
                label="overview"
                name="overview"
                autoComplete="overview"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="forWhom"
                label="forWhom"
                name="forWhom"
                autoComplete="forWhom"
                autoFocus
              />
        
  
            
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                 Add Workshop
               
  
              </Button>
  
              <Grid container>
                
              </Grid>
            </Box>
          </Box>
  
        </Container>
      </ThemeProvider>
    )
}

export default AddWorkshop;
