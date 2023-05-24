import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
 reducerPath: "eventApi",
 baseQuery:  fetchBaseQuery({
  baseUrl: "http://localhost:5000"
 }),
 endpoints : (builder) =>({
    getEvent : builder.query({
        query: () =>"/events",
    }),
   
 }),


});
export const {useGetEventQuery} = eventApi;