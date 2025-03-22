import { createSlice } from "@reduxjs/toolkit";

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        activeIndex: 0
    },
    reducers: {
        changeActiveIndex(state, action) {
            console.log(action.payload);
            state.changeActiveIndex = action.payload
        }
    }
})

const { changeActiveIndex } = foodsStore.actions

export { changeActiveIndex }
const reducer = foodsStore.reducer
export default reducer