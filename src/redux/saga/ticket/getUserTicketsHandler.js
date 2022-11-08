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
    yield put(setTicketLoading(true));
    const resUserTickets = yield call(apiRequest.userTickets, payload);
    yield put(setUserTickets(resUserTickets.data));
    yield put(setTicketLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setTicketLoading(false));
    yield put(setError(true));
  }
}

export default handleGetUserTickets;
