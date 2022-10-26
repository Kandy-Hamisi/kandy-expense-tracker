import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modalState: false,
}


const modalSlice  = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openAccountModal: (state) => {
            state.modalState = true
        },
        closeAccountModal: (state) => {
            state.modalState = false
        },
    }
});



export default modalSlice.reducer;
export const { openAccountModal, closeAccountModal } = modalSlice.actions;