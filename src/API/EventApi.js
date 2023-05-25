import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
 reducerPath: "eventApi",
 baseQuery:  fetchBaseQuery({
  baseUrl: "https://server-eight-delta.vercel.app"
 }),
 endpoints : (builder) =>({
    getEvent : builder.query({
        query: () =>"/events",
    }),
    addEvent: builder.mutation({
        query: (data) =>({
            url: "/events",
            method: "POST",
            body : data,
        })
     })
 }),
 

});
export const {useGetEventQuery , useAddEventMutation} = eventApi;