import { call, put } from "redux-saga/effects";

import requestGetLoginInfo from "./loginRequest";
import {
  setLoginInfo,
  setLoading,
  setError,
  setErrorMsg,
  setOpenLoginForm,
} from "../../slices/loginSlice";

function* handleGetLoginInfo({ payload }) {
  const apiRequest = requestGetLoginInfo();
  try {
    yield put(setLoading(true));
    yield put(setErrorMsg(""));
    const resLoginInfo = yield call(apiRequest.login, payload);
    const resUserInfo = yield call(apiRequest.userInfo, resLoginInfo.data._id);
    yield put(setLoginInfo(resUserInfo.data));
    localStorage.setItem("_id", resUserInfo.data._id);
    localStorage.setItem("fullName", resUserInfo.data.fullName);
    localStorage.setItem("email", resUserInfo.data.email);
    localStorage.setItem("phone", resUserInfo.data.phone);
    yield put(setLoading(false));
    yield put(setOpenLoginForm(false));
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
    yield put(setError(true));
    if (error.response.status === 401) {
      yield put(setErrorMsg(error.response.data.message));
    }
  }
}

export default handleGetLoginInfo;
