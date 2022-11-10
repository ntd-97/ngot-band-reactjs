import { call, put } from "redux-saga/effects";

import requestSignUpAccount from "./signUpRequest";
import {
  setSignUpInfo,
  setLoading,
  setError,
  setErrorMsg,
} from "../../slices/signUpSlice";

import { getLoginInfo, setLoginLoading } from "../../slices/loginSlice";

import { getTicketAdded, setTicketLoading } from "../../slices/ticketSlice";

function* handleSignUpAccount({ payload }) {
  try {
    yield put(setLoading(true));
    // set loading of login slice
    yield put(setLoginLoading(true));

    // set loading of ticket slice
    if (payload.signUpAndAddTicket) {
      yield put(setTicketLoading(true));
    }

    // reset error msg
    yield put(setErrorMsg(""));

    // call signup API
    const resSignUpAccount = yield call(requestSignUpAccount, payload);
    yield put(setSignUpInfo(resSignUpAccount.data));

    if (resSignUpAccount.data.success === false) {
      yield put(setLoading(false));
    } else {
      // call login
      yield put(
        getLoginInfo({
          email: resSignUpAccount.data.email,
          password: resSignUpAccount.data.password,
        })
      );

      // call add ticket
      if (payload.signUpAndAddTicket) {
        yield put(
          getTicketAdded({
            amount: payload.amount,
            ticketType: payload.ticketType,
            user: resSignUpAccount.data._id,
            show: payload.show,
          })
        );
      }

      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
    yield put(setTicketLoading(false));
    yield put(setLoginLoading(false));
    yield put(setError(true));

    // set error message
    if (!error.response.data.success) {
      yield put(setErrorMsg(error.response.data.message));
    }
  }
}

export default handleSignUpAccount;
