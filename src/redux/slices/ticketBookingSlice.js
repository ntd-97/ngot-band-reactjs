import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showId: "",
  openTicketBooking: false,
};

const ticketBookingSlice = createSlice({
  name: "ticketBooking",
  initialState,
  reducers: {
    setShowId: (state, action) => ({
      ...state,
      showId: action.payload.showId,
    }),
    setOpenTicketBooking: (state, action) => ({
      ...state,
      openTicketBooking: action.payload.openTicketBooking,
    }),
  },
});

export const { setOpenTicketBooking, setShowId } = ticketBookingSlice.actions;
export default ticketBookingSlice.reducer;
