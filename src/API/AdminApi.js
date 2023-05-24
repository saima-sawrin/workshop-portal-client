import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
 reducerPath: "adminApi",
 baseQuery:  fetchBaseQuery({
  baseUrl: "http://localhost:5000"
 }),
 endpoints : (builder) =>({
    getAdmin : builder.query({
        query: () =>"/admin",
    }),
   
 }),


});
export const {useGetAdminQuery} = adminApi;