import { takeLatest } from "redux-saga/effects";

import { getTicketAdded } from "../../slices/ticketSlice";

import handleAddTicket from "./addTicketHandler";

export default function* signUpSaga() {
  yield takeLatest(getTicketAdded.type, handleAddTicket);
}
