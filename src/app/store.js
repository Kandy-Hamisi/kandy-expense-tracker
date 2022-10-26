import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/Modal/modalSlice';
import addAccountReducer from '../features/AddAccount/addAccountSlice'
import recordModalReducer from '../features/Modal/recordModalSlice'
import recordsReducer from '../features/Records/addRecordSlice'

const store = configureStore({
    reducer: {
        accountModal: modalReducer,
        addAccount: addAccountReducer,
        recordModal: recordModalReducer,
        records: recordsReducer,
    }
})


export default store;