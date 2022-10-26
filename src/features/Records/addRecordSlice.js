import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allRecords: [],
}


const addRecordSlice = createSlice({
    name: "records",
    initialState,
    reducers: {
        addNewRecord: (state, action) => {
            state.allRecords = [...state.allRecords, action.payload];
        },
    }
});


export const { addNewRecord } = addRecordSlice.actions;
export default addRecordSlice.reducer;