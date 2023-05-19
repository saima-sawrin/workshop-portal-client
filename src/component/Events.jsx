import React, { useEffect, useState } from 'react';
import {
  
    Box,
    Typography,
   
    useTheme,
  } from "@mui/material";

import Event from './Event';
 import line from '../asset/line.png';
import Image from 'mui-image';
import './Events.css';
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from './eventSlice';

const Events = () => {
    const theme = useTheme();
    // const {events , isLoading} = useSelector((state)=> state.events)
    const dispatch =  useDispatch();
    const [events , setEvents] = useState([]);

    useEffect(()=>{
        fetch('event.json')
        .then(res => res.json())
        .then(data => setEvents(data))
        dispatch(getEvents());
      },[])
    return (
        <Box my={10}>
            <Typography fontWeight="bold"
                  fontSize="35px"
                   textAlign={'center'} >Upcoming Events</Typography>
                    
                    <div className='align-center'>
                    <Image src={line} height={40} width={500} />
                    </div>
                <Box   mx={50} my={6} >
       
                  {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                    }
            
                   
                </Box>
        </Box>
    );
};

export default Events;