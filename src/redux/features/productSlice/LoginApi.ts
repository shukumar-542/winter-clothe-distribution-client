import { baseApi } from "../../api/baseApi";

const loginApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        login : builder.mutation({
            query : (userInfo) =>({
                url : '/login',
                method : "POST",
                body : userInfo,
            })
        })
    })
})
const registerApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        register : builder.mutation({
            query : (userInfo) =>({
                url : '/register',
                method : "POST",
                body : userInfo,
            })
        })
    })
})
export const { useRegisterMutation } = registerApi;
export const { useLoginMutation } = loginApi