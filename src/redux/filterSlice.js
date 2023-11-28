import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryValueId: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.categoryValueId = action.payload
        },
    },
})

export const { changeCategory } = filterSlice.actions

export default filterSlice.reducer