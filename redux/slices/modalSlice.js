// modalSlice.js
import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
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

export const { showModal, hideModal, toggleModal } = modalSlice.actions

export default modalSlice.reducer
