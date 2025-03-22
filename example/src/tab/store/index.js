import { configureStore } from '@reduxjs/toolkit';
import changeReducer from './module/changeTab'

const store = configureStore({
    reducer: {
        change: changeReducer
    }
})

export default store