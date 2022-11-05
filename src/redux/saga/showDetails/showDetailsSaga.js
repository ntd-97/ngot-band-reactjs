import { takeLatest } from "redux-saga/effects";

import { getShowDetails } from "../../slices/showDetailsSlice";

import handleGetShowDetails from "./showDetailsHandler";

export default function* showDetailsSaga() {
  yield takeLatest(getShowDetails.type, handleGetShowDetails);
}
