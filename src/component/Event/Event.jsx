
import { Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Events.css';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
    const theme = useTheme();
    const {_id,Title , Description , Date , Location} = event;
    return (
    
          <Card sx={{ maxWidth: 800 , borderColor:'blue', border:1 , my:2 , boxShadow:2  }}  className='shadow' >
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold"
                  fontSize="25px">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
              Description.length> 80?<>{Description.slice(0,80)+ '....'}<Link to={`/events/${_id}`}><b>Read more</b></Link></> : Description
            }
          </Typography>
        </CardContent>
        <CardContent>
          
  
        <Typography  
            ml={'4px'}
                  fontSize="15px"
                  sx={{ color: theme.palette.text.Blue}} >
                <CalendarMonthIcon className='inline'></CalendarMonthIcon> {Date}  || <LocationOnIcon></LocationOnIcon> {Location}
          </Typography>
      
      
     
        </CardContent>
      </Card>
    );
};

export default Event;
