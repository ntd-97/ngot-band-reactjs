import { takeLatest } from "redux-saga/effects";

import { getCommonInfo } from "../../slices/commonInfoSlice";

import handleGetCommonInfo from "./commonInfoHandler";

export default function* commonInfoSaga() {
  yield takeLatest(getCommonInfo.type, handleGetCommonInfo);
}
