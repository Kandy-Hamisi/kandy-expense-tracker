import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recordModalState: false,
}


const recordModalSlice  = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openRecordModal: (state) => {
            state.recordModalState = true
        },
        closeRecordModal: (state) => {
            state.recordModalState = false
        },
    }
});



export default recordModalSlice.reducer;
export const { openRecordModal, closeRecordModal } = recordModalSlice.actions;