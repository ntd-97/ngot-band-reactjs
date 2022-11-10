import { call, put } from "redux-saga/effects";

import requestTicket from "./ticketRequest";

import {
  setTicketAdded,
  setError,
  setTicketLoading,
  getUserTickets,
} from "../../slices/ticketSlice";
import { setOpenTicketBooking } from "../../slices/ticketBookingSlice";

function* handleAddTicket({ payload }) {
  const apiRequest = requestTicket();
  try {
    // show loading
    yield put(setTicketLoading(true));

    // add ticket
    const resAddTicket = yield call(apiRequest.addTicket, payload);
    yield put(setTicketAdded(resAddTicket.data));
    yield put(getUserTickets(payload.user));

    // hide loading
    yield put(setTicketLoading(false));

    // close form
    yield put(setOpenTicketBooking(false));
  } catch (error) {
    console.log(error);
    yield put(setTicketLoading(false));
    yield put(setError(true));
  }
}

export default handleAddTicket;
