import { takeLatest } from "redux-saga/effects";

import { getLoginInfo } from "../../slices/loginSlice";

import handleGetLoginInfo from "./loginHandler";

export default function* loginSaga() {
  yield takeLatest(getLoginInfo.type, handleGetLoginInfo);
}
