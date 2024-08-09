import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"
import weatherReducer from"./features/user/weatherSlice"
export const store = configureStore({
    reducer:{
       userDetail:userReducer,
       weatherDetail:weatherReducer,
    },
});