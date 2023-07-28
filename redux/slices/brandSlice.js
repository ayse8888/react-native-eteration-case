import { createSlice } from '@reduxjs/toolkit'

const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        selectedBrands: [],
    },
    reducers: {
        toggleBrandSelection: (state, action) => {
            const isBrandSelected = state.selectedBrands.includes(
                action.payload
            )
            if (isBrandSelected) {
                state.selectedBrands = state.selectedBrands.filter(
                    (selectedBrand) => selectedBrand !== action.payload
                )
            } else {
                state.selectedBrands.push(action.payload)
            }
        },
    },
})

export const { toggleBrandSelection } = brandSlice.actions
export default brandSlice.reducer
