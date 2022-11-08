import { takeLatest } from "redux-saga/effects";

import { getSignUpInfo } from "../../slices/signUpSlice";

import handleSignUpAccount from "./signUpHandler";

export default function* signUpSaga() {
  yield takeLatest(getSignUpInfo.type, handleSignUpAccount);
}
