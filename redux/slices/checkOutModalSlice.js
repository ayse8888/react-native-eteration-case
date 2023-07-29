import { createSlice } from '@reduxjs/toolkit'

const checkOutModalSlice = createSlice({
    name: 'checkOutModal',
    initialState: {
        isModalVisible: false,
    },
    reducers: {
        showModal: (state) => {
            state.isModalVisible = true
        },
        hideModal: (state) => {
            state.isModalVisible = false
        },
        toggleModal: (state) => {
            state.isModalVisible = !state.isVisible
        },
    },
})

export const { showModal, hideModal, toggleModal } = checkOutModalSlice.actions

export default checkOutModalSlice.reducer
