import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWoks = createAsyncThunk(
  "wok/fetchWokStatus",
  async (params, thunkApi) => {
    const { order, sortBy, category, search, pageValue } = params;
    const { data } = await axios.get(
      `https://655251e85c69a7790329e2f4.mockapi.io/wok-data?page=${pageValue}&limit=3&${category}&sortby=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "pending",
};

export const wokSlice = createSlice({
  name: "wok",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWoks.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchWoks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchWoks.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const selectWok = (state) => state.wok;

export const { setItems } = wokSlice.actions;

export default wokSlice.reducer;
