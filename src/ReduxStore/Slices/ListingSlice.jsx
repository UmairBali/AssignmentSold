import { createSlice } from "@reduxjs/toolkit";

const ListingSlice = createSlice({
  name: "ListingSlice",
  initialState: [],
  reducers: {
    addListingsDataSlice: (state, action) => {
          state.push(action.payload);
    },
    removeListingsDataSlice: () => {
      return [];
    },
  
  },
});
export const { addListingsDataSlice, removeListingsDataSlice} = ListingSlice.actions;
export default ListingSlice.reducer;