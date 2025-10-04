import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import usersReducer from "./slices/usersSlice";

export const store = configureStore({

  reducer:{
    // todo: we will add content in here
    counter:counterReducer,
    users:usersReducer 
  }

})