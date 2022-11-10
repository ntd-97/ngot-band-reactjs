import { call, put } from "redux-saga/effects";

import requestTicket from "./ticketRequest";

import {
  setError,
  setTicketLoading,
  setUserTickets,
} from "../../slices/ticketSlice";

function* handleGetUserTickets({ payload }) {
  const apiRequest = requestTicket();
  try {
    // show loading
    yield put(setTicketLoading(true));

    // get user's tickets
    const resUserTickets = yield call(apiRequest.userTickets, payload);
    yield put(setUserTickets(resUserTickets.data));

    // hide loading
    yield put(setTicketLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setTicketLoading(false));
    yield put(setError(true));
  }
}

export default handleGetUserTickets;
