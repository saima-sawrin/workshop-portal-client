import {  Avatar, Box, Card, CardContent, Container, Grid, ListItem, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from '../FlexBetween';
import { Image } from 'mui-image';
import { useLoaderData } from 'react-router-dom';
// import img from '../../asset/1.jpg'
import { useTheme } from '@emotion/react';
import FAQ from './FAQ';

const EventDetails = () => {
   const theme = useTheme();
    const eventDetails = useLoaderData();
    const {Title , Description , host , aboutHost , course , overview ,forWhom ,img} = eventDetails;
    // console.log(eventDetails)
    return (
        <Card fontFamily='roboto sans-serif'>
            
            <FlexBetween>
            <CardContent >   
                 <Typography  gutterBottom variant="h5" component="div" fontWeight="bold"
                  fontSize="35px" mt={12} sx={{ color: theme.palette.typography.h1}} fontFamily='roboto sans-serif' >
                {Title}
             </Typography>
             <Typography variant="body2" color="text.secondary" >
                {Description}
             </Typography>
             <Typography variant="body2" color="text.secondary" mt={5}  >HOSTED BY</Typography>
             <FlexBetween>
               <Avatar></Avatar>
      
          <Container>
          <Typography fontWeight="bold"
                  fontSize="20px" >
                {host}
             </Typography>
             <Typography>
                {aboutHost}
             </Typography>
          </Container>
             </FlexBetween>
             <Typography variant="body2" color="text.secondary" mt={3}>COURSE OVERVIEW</Typography>
             <Typography fontWeight="bold"
                   mt={3} fontSize="20px">{course}</Typography>
             <Typography>{overview}</Typography>
             <Typography my={5} fontSize="25px" fontWeight="bold">This course is for: </Typography>
             <Grid color="text.blue" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={4}>
                  <ListItem  >1</ListItem>
                </Grid>
                <Grid xs={4}>
                  <ListItem>2</ListItem>
                </Grid>
                <Grid xs={4}>
                  <ListItem>3</ListItem>
                </Grid>
               
            </Grid>
             <Grid color="text.blue" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={4}>
                  <ListItem>{forWhom[0]}</ListItem>
                </Grid>
                <Grid xs={4}>
                  <ListItem>{forWhom[1]}</ListItem>
                </Grid>
                <Grid xs={4}>
                  <ListItem>{forWhom[2]}</ListItem>
                </Grid>
               
            </Grid>
             </CardContent>
            <CardContent>
            <Image src={img} height={500} width={700}  ></Image>
            </CardContent>
         
            </FlexBetween>
            
            <Box mx={20} my={7}> 
            <Typography fontWeight="bold"
        fontSize="35px"
        textAlign={'center'} my={4} >Frequently Asked Question</Typography>
         <FAQ></FAQ></Box>
        </Card>
    );
};

export default EventDetails;