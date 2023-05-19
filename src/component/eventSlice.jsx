import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState ={
  isLoading : "false",
  isError : "false",
   error: ""
}
 
export const  getEvents = createAsyncThunk("/event/getEvent", async()=>{
  const res = await fetch('event.json');
  const data = await res.json();
  return data.data;
});

const eventSlice = createSlice( {
  name: 'event',
  initialState,
  extraReducer:(builder) =>{
    builder
    .addCase(getEvents.pending ,(state, action)=>{
      state.isLoading = true;
      state.isError =  false;

    })
    .addCase(getEvents.fulfilled ,(state, action)=>{
      state.event = action.payload;
      state.isLoading = false;
      state.isError =  false;

    })
    .addCase(getEvents.rejected ,(state, action)=>{
      state.event = [];
      state.isLoading = false;
      state.isError =  true;
      state.error = action.error.message;

    })
  },
})

export default eventSlice.reducer;