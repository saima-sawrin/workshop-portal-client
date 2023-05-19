import { Details } from '@mui/icons-material';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const PublicRouter = createBrowserRouter  ([
    {
        
            path:'/details',
            loader:({params})=>fetch(`product/allEvents/${params.id}`),
            element: <Details></Details>,
            


    }
]) 

export default PublicRouter;