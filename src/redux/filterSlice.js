import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  pageValue: 1,
  sort: { name: "популярности", sortProp: "rating" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    changePage: (state, action) => {
      state.pageValue = action.payload;
    },
    setFilters: (state, action) => {
      state.pageValue = Number(action.payload.pageValue);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectSort = (state) => state.filter;

export const {
  changeCategory,
  changeSort,
  changePage,
  setFilters,
  changeSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
