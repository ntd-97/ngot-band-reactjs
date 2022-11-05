import { all, fork } from "redux-saga/effects";

import commonInfoSaga from "./commonInfo/commonInfoSaga";

export default function* rootSaga() {
  yield all([fork(commonInfoSaga)]);
}
