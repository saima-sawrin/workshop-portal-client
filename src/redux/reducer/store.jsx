import {configureStore  } from '@reduxjs/toolkit';
import { eventApi } from '../../API/EventApi';
import { expertApi } from '../../API/ExpertApi';

const store = configureStore({
    reducer : {
        [eventApi.reducerPath]:eventApi.reducer,
        [expertApi.reducerPath]:expertApi.reducer
       
    },
    
    middleware: (getDefaultMiddleware)=> 
    getDefaultMiddleware().concat(eventApi.middleware , expertApi.middleware),
 

})

export default store;