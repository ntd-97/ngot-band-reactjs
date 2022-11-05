import { call, put } from "redux-saga/effects";

import {
  setShowDetails,
  setLoading,
  setError,
} from "../../slices/showDetailsSlice";

import requestGetShowDetails from "./showDetailsRequest";

function* handleGetShowDetails({ payload }) {
  try {
    yield put(setLoading(true));
    const resShowDetails = yield call(requestGetShowDetails, payload.showId);
    yield put(setShowDetails({ showDetails: resShowDetails.data }));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(true));
  }
}
export default handleGetShowDetails;
