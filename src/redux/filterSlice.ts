import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Sort = {
  name: string;
  sortProp: "rating" | "price" | "-title";
};

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  pageValue: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  pageValue: 1,
  sort: { name: "популярности", sortProp: "rating" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    changeSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    changePage: (state, action) => {
      state.pageValue = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
      state.pageValue = Number(action.payload.pageValue);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectSort = (state: RootState) => state.filter;

export const {
  changeCategory,
  changeSort,
  changePage,
  setFilters,
  changeSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
