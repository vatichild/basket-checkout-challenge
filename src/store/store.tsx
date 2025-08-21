import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import basketReducer from "./basketSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: basketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
