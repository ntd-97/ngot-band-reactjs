import { takeLatest } from "redux-saga/effects";

import { getTicketAdded, getUserTickets } from "../../slices/ticketSlice";

import handleAddTicket from "./addTicketHandler";

import handleGetUserTickets from "./getUserTicketsHandler";

export default function* signUpSaga() {
  yield takeLatest(getTicketAdded.type, handleAddTicket);
  yield takeLatest(getUserTickets.type, handleGetUserTickets);
}
