import { all, fork } from "redux-saga/effects";

import commonInfoSaga from "./commonInfo/commonInfoSaga";
import showDetailsSaga from "./showDetails/showDetailsSaga";
import loginSaga from "./login/loginSaga";
import signUpSaga from "./signUp/signUpSaga";
import ticketSaga from "./ticket/ticketSaga";

export default function* rootSaga() {
  yield all([
    fork(commonInfoSaga),
    fork(showDetailsSaga),
    fork(loginSaga),
    fork(signUpSaga),
    fork(ticketSaga),
  ]);
}
