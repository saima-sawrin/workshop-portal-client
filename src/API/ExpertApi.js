import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const expertApi = createApi({
 reducerPath: "expertApi",
 baseQuery:  fetchBaseQuery({
  baseUrl: "https://server-eight-delta.vercel.app"
 }),
 endpoints : (builder) =>({
    getExpert : builder.query({
        query: () =>"/users",
    }),
   
 }),


});
export const {useGetExpertQuery} = expertApi;