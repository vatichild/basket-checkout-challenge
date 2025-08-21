import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "./store"

export const selectTotalPrice = createSelector(
    [(state: RootState) => state.basket.basket, (state: RootState) => state.products.products],
    (basket, products) => {
        let sum = 0
        basket.forEach((item) => {
            const product = products.find((p) => p.sku === item.sku)
            if (product) sum += product.price * item.quantity
        })
        return Number(sum.toFixed(2))
    }
)
