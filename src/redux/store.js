import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productReducer from "./features/productSlice";

const rootReducer = combineReducers({
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});