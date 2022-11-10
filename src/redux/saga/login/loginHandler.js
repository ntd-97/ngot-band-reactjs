import { call, put } from "redux-saga/effects";

import requestGetLoginInfo from "./loginRequest";
import {
  setLoginInfo,
  setLoginLoading,
  setError,
  setErrorMsg,
  setOpenLoginForm,
} from "../../slices/loginSlice";

import { setOpenSignUpForm } from "../../slices/signUpSlice";

function* handleGetLoginInfo({ payload }) {
  const apiRequest = requestGetLoginInfo();
  try {
    // show loading
    yield put(setLoginLoading(true));

    // set empty error message
    yield put(setErrorMsg(""));

    // authentication user
    const resLoginInfo = yield call(apiRequest.login, payload);

    // get user information
    const resUserInfo = yield call(apiRequest.userInfo, resLoginInfo.data._id);
    yield put(setLoginInfo(resUserInfo.data));

    // set local storage user information
    localStorage.setItem("_id", resUserInfo.data._id);
    localStorage.setItem("fullName", resUserInfo.data.fullName);
    localStorage.setItem("email", resUserInfo.data.email);
    localStorage.setItem("phone", resUserInfo.data.phone);

    // hide loading
    yield put(setLoginLoading(false));

    // close form
    yield put(setOpenLoginForm(false));
    yield put(setOpenSignUpForm(false));
  } catch (error) {
    console.log(error);
    yield put(setLoginLoading(false));
    yield put(setError(true));

    // set authentication error message
    if (error.response.status === 401) {
      yield put(setErrorMsg(error.response.data.message));
    }
  }
}

export default handleGetLoginInfo;
