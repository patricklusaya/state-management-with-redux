import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'

export const store = configureStore({

  reducer:{
    // todo: we will add content in here
    counter:counterReducer 
  }

})