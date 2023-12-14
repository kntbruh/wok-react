import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    pageValue: 1,
    sort: { name: 'популярности', sortProp: 'rating' },
    sortList: [
        { name: 'популярности', sortProp: 'rating' },
        { name: 'цене', sortProp: 'price' },
        { name: 'алфавиту', sortProp: '-title' },
    ],
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.categoryId = action.payload
        },
        changeSort: (state, action) => {
            state.sort = action.payload
        },
        changePage: (state, action) => {
            state.pageValue = action.payload
        },
    },
})

export const { changeCategory, changeSort, changePage } = filterSlice.actions

export default filterSlice.reducer