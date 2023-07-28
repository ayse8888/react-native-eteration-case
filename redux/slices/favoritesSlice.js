import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            const isProductInFavorites = state.favorites.find(
                (favProduct) => favProduct.id === action.payload.id
            )
            if (!isProductInFavorites) {
                state.favorites.push(action.payload)
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(
                (item) => item.id !== action.payload.id
            )
        },
    },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
