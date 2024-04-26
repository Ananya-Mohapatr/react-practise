import { configureStore } from "@reduxjs/toolkit";
import reducer from './CardSlice'

const appStore = configureStore({
    reducer : {
      cart: reducer
    }
});

export default appStore;
