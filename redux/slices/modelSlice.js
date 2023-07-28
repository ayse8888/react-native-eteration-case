import { createSlice } from '@reduxjs/toolkit'

const modelSlice = createSlice({
    name: 'model',
    initialState: {
        selectedModels: [],
    },
    reducers: {
        toggleModelSelection: (state, action) => {
            const isModelSelected = state.selectedModels.includes(
                action.payload
            )
            if (isModelSelected) {
                state.selectedModels = state.selectedModels.filter(
                    (selectedModel) => selectedModel !== action.payload
                )
            } else {
                state.selectedModels.push(action.payload)
            }
        },
    },
})

export const { toggleModelSelection } = modelSlice.actions
export default modelSlice.reducer
