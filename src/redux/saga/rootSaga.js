import { all, fork } from "redux-saga/effects";

import commonInfoSaga from "./commonInfo/commonInfoSaga";
import showDetailsSaga from "./showDetails/showDetailsSaga";

export default function* rootSaga() {
  yield all([fork(commonInfoSaga),fork(showDetailsSaga)]);
}
