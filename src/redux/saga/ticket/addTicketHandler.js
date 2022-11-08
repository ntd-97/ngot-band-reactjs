import { call, put } from "redux-saga/effects";

import requestTicket from "./ticketRequest";

import {
  setTicketAdded,
  setError,
  setTicketLoading,
} from "../../slices/ticketSlice";
import { setOpenTicketBooking } from "../../slices/ticketBookingSlice";

function* handleAddTicket({ payload }) {
  const apiRequest = requestTicket();
  try {
    yield put(setTicketLoading(true));
    const resAddTicket = yield call(apiRequest.addTicket, payload);
    yield put(setTicketAdded(resAddTicket.data));
    yield put(setTicketLoading(false));
    yield put(setOpenTicketBooking(false));
  } catch (error) {
    console.log(error);
    yield put(setTicketLoading(false));
    yield put(setError(true));
  }
}

export default handleAddTicket;
