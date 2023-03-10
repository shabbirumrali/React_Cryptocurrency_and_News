import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '7070e854dfmsha33f4dcfafa5a04p16eae9jsnc5befb3a6e7e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'    
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({ 
            query: (count) => createRequest(`/coins?limit=${count}`) 
        })
    })
})
export const { 
    useGetCryptosQuery
} = cryptoApi