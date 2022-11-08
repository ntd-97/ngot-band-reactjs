import { combineReducers } from "@reduxjs/toolkit";

import commonInfoReducer from "./slices/commonInfoSlice";
import showDetailsReducer from "./slices/showDetailsSlice";
import ticketBookingReducer from "./slices/ticketBookingSlice";
import loginReducer from "./slices/loginSlice";
import signUpReducer from "./slices/signUpSlice";
import ticketReducer from "./slices/ticketSlice";

const reducer = combineReducers({
  commonInfo: commonInfoReducer,
  ticketBooking: ticketBookingReducer,
  showDetails: showDetailsReducer,
  login: loginReducer,
  signUp: signUpReducer,
  ticket: ticketReducer,
});

export default reducer;
