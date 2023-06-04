import { configureStore } from "@reduxjs/toolkit";
import userslice from "./Slice";

const mystore=configureStore({reducer:{user:userslice}});



export default mystore;