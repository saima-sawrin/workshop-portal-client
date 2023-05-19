import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlexBetween from './FlexBetween';
import { useTheme } from '@emotion/react';

const Details = () => {
    const theme = useTheme();
    const [eventDetails , setEventDetails] = useState([]);
    useEffect(()=>{
        fetch('event.json')
        .then(res => res.json())
        .then(data => setEventDetails(data))
      },[])
    return (
        <Box >
        {
         eventDetails.map(e => <eventDetails e={e} ></eventDetails>)
        }
       </Box>
    );
};

export default Details;