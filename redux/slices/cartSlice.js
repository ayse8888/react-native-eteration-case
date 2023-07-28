import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(
                (item) => item.id === action.payload.id
            )
            if (existingProduct) existingProduct.quantity += 1
            else state.push({ ...action.payload, quantity: 1 })
        },
        incrementQuantity: (state, action) => {
            const existingProduct = state.find(
                (item) => item.id === action.payload.id
            )
            existingProduct.quantity += 1
        },
        decrementQuantity: (state, action) => {
            const existingProduct = state.find(
                (item) => item.id === action.payload.id
            )
            if (existingProduct.quantity === 0) existingProduct.quantity = 0
            else existingProduct.quantity -= 1
        },
    },
})

export const { addToCart, incrementQuantity, decrementQuantity } =
    cartSlice.actions
export default cartSlice.reducer