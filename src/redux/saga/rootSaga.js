import { all, fork } from "redux-saga/effects";

import commonInfoSaga from "./commonInfo/commonInfoSaga";
import showDetailsSaga from "./showDetails/showDetailsSaga";
import loginSaga from "./login/loginSaga";

export default function* rootSaga() {
  yield all([fork(commonInfoSaga),fork(showDetailsSaga),fork(loginSaga)]);
}
