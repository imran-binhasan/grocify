
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import paginationReducer from "./features/paginationSlice"
import badgeReducer from "./features/badgeSlice"
export const store = configureStore({
    reducer:{
        auth:authReducer,
        pagination:paginationReducer,
        badge:badgeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch