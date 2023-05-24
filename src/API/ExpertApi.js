import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const expertApi = createApi({
 reducerPath: "expertApi",
 baseQuery:  fetchBaseQuery({
  baseUrl: "http://localhost:5000"
 }),
 endpoints : (builder) =>({
    getExpert : builder.query({
        query: () =>"/users",
    }),
   
 }),


});
export const {useGetExpertQuery} = expertApi;