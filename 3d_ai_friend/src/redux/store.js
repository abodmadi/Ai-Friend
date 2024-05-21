import { configureStore } from '@reduxjs/toolkit'
import requestReducer from './slices/request_slices.js'

export const store = configureStore({
    reducer: {
        request:requestReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }),
})