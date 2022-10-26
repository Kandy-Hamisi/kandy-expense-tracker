import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/Modal/modalSlice';
import addAccountReducer from '../features/AddAccount/addAccountSlice'

const store = configureStore({
    reducer: {
        accountModal: modalReducer,
        addAccount: addAccountReducer,
    }
})


export default store;