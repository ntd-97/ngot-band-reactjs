import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false, error: false, showDetails: {} };

const showDetailsSlice = createSlice({
  name: "showDetails",
  initialState,
  reducers: {
    getShowDetails() {},
    setShowDetails: (state, action) => ({
      ...state,
      showDetails: action.payload.showDetails,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action) => ({ ...state, error: action.payload }),
  },
});

export const { getShowDetails, setShowDetails, setLoading, setError } =
  showDetailsSlice.actions;
export default showDetailsSlice.reducer;
