import { combineReducers } from "@reduxjs/toolkit";

import commonInfoReducer from "./slices/commonInfoSlice";
import showDetailsReducer from "./slices/showDetailsSlice";
import TicketBookingReducer from "./slices/ticketBookingSlice";

const reducer = combineReducers({
  commonInfo: commonInfoReducer,
  ticketBooking: TicketBookingReducer,
  showDetails: showDetailsReducer,
});

export default reducer;
