import React, { useEffect, useState } from 'react';
import {

  Box,
  Typography,

  useTheme,
} from "@mui/material";

import Event from './Event';
import line from '../../asset/line.png';
import Image from 'mui-image';
import './Events.css';
import { useGetEventQuery } from '../../API/EventApi';

const Events = () => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  // const [events , setEvents] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/events')
  //   .then(res => res.json())
  //   .then(data => setEvents(data))
  // }, [])
  const {data ,isError  , isSuccess , isLoading , error} = useGetEventQuery();
  // const events = data?.data;
  // console.log(data);
  const activeClass = "text-white bg-indigo border-white";

  if (isLoading){
    return <p>Loading...</p>
  }
  if (isError){
    return <p>Error...</p>
  }
  return (
    <Box my={10}>
      <Typography fontWeight="bold"
        fontSize="35px"
        textAlign={'center'} >Upcoming Events</Typography>

      <div className='align-center'>
        <Image src={line} height={40} width={500} />
      </div>
      <Box mx={50} my={6} >

        {
          data.map(event => <Event key={event._id} event={event} ></Event>)
        } 

      </Box>
    </Box>
  );
};

export default Events;