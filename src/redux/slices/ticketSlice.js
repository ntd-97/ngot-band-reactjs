import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketAdded: {},
  loading: false,
  error: false,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    getTicketAdded() {},
    setTicketAdded: (state, action) => ({
      ...state,
      ticketAdded: action.payload,
    }),
    setError: (state, action) => ({ ...state, error: action.payload }),
    setTicketLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const { getTicketAdded, setTicketAdded, setError, setTicketLoading } =
  ticketSlice.actions;
export default ticketSlice.reducer;
