import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://l2-b2-assignment-7-backend-shukumar-542.vercel.app/api/v1' }),
    tagTypes : ['products' , 'comment','volunteers'],
    endpoints: () => ({})
})
