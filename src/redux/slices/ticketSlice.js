import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userTickets: [],
  ticketAdded: {},
  loading: false,
  error: false,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    getUserTickets() {},
    setUserTickets: (state, action) => ({
      ...state,
      userTickets: action.payload,
    }),
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

export const {
  getTicketAdded,
  setTicketAdded,
  setError,
  setTicketLoading,
  getUserTickets,
  setUserTickets,
} = ticketSlice.actions;
export default ticketSlice.reducer;
