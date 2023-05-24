import {configureStore  } from '@reduxjs/toolkit';
import { eventApi } from '../../API/EventApi';
import { adminApi } from '../../API/AdminApi';

const store = configureStore({
    reducer : {
        [eventApi.reducerPath]:eventApi.reducer,

       
    },
    
    middleware: (getDefaultMiddleware)=> 
    getDefaultMiddleware().concat(eventApi.middleware),

})

export default store;