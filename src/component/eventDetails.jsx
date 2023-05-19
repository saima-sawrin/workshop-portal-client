import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import FlexBetween from './FlexBetween';
import { Image } from 'mui-image';

const eventDetails = ({e}) => {
    const {Title , Description} = e;
    return (
        <Card>
            
            <FlexBetween>
            <CardContent>   
                 <Typography  gutterBottom variant="h5" component="div" fontWeight="bold"
                  fontSize="25px">
                {Title}
             </Typography>
             <Typography variant="body2" color="text.secondary">
                {Description}
             </Typography>
             </CardContent>
            <CardContent>
            <Image></Image>
            </CardContent>
         
            </FlexBetween>
            
        </Card>
    );
};

export default eventDetails;