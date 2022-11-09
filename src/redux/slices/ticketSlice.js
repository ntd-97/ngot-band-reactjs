import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userTickets: [],
  ticketAdded: {},
  openTicketSideBar: false,
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
    setOpenTicketSideBar: (state, action) => ({
      ...state,
      openTicketSideBar: action.payload,
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
  setOpenTicketSideBar,
} = ticketSlice.actions;
export default ticketSlice.reducer;
