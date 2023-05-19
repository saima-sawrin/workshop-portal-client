import {configureStore  } from '@reduxjs/toolkit';
import eventSlice from '../../component/eventSlice';
import logger from 'redux-logger'
const store = configureStore({
    reducer : {
        event: eventSlice,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

export default store;