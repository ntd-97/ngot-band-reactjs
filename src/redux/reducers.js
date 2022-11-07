import { combineReducers } from "@reduxjs/toolkit";

import commonInfoReducer from "./slices/commonInfoSlice";
import showDetailsReducer from "./slices/showDetailsSlice";
import ticketBookingReducer from "./slices/ticketBookingSlice";
import loginReducer from "./slices/loginSlice";

const reducer = combineReducers({
  commonInfo: commonInfoReducer,
  ticketBooking: ticketBookingReducer,
  showDetails: showDetailsReducer,
  login: loginReducer,
});

export default reducer;
