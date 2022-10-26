import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allAccounts: [],
}


const addAccountSlice = createSlice({
    name: "addAccount",
    initialState,
    reducers: {
        addNewAccount: (state, action) => {
            state.allAccounts =  [...state.allAccounts, action.payload]
        },
    },
});


export const { addNewAccount } = addAccountSlice.actions;
export default addAccountSlice.reducer;