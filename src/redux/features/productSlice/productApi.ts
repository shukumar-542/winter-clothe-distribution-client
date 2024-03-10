import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
 
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/winter-clothes'
    })
  })
})

const productByEmail = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductByEmail: builder.query({
      query: (email) => ({
        url : `/winter-cloth/${email}`,
        method : "GET",
      }),
      providesTags : ['products']
    }),
    
  })
})
const productById = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => ({
       url : `/winter-clothes/${id}`,
       method : "GET",
      }),
      providesTags : ['products']
    })
  })
})
const productLimit = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLimitProduct: builder.query({
      query: () => `/limit-clothes`
    })
  })
})
const postProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (body) => ({
        url : '/winter-clothes',
        method : "POST",
        body : body
      }),
      invalidatesTags : ['products']
    })
  })
})
const deleteProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteProduct: builder.mutation({
      query: (id) => ({
        url : `/winter-clothes/${id}`,
        method : "DELETE"
      }),
      invalidatesTags : ['products']
    })
  })
})
const updateProduct = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProduct: builder.mutation({
      query: ({id, data}) => ({
          
          
        url : `/winter-clothes/${id}`,
        method : "PATCH",
        body : data
      }),
      invalidatesTags : ['products']
    })
  })
})
export const { useUpdateProductMutation } = updateProduct;
export const{ useDeleteProductMutation } = deleteProduct;
export const { usePostProductMutation } = postProduct;
export const { useGetProductByIdQuery } = productById;
export const { useGetProductByEmailQuery } = productByEmail;
export const { useGetLimitProductQuery } = productLimit;
export const { useGetProductsQuery } = productApi;