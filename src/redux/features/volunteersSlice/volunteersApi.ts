import { baseApi } from "../../api/baseApi";

const volunteersApi = baseApi.injectEndpoints({
    endpoints  :(builder) =>({
        getAllVolunteers  :  builder.query({
            query: () => `/donor-testimonial`
        })
    })
})

export const { useGetAllVolunteersQuery } = volunteersApi