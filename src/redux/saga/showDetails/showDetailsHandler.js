import { call, put } from "redux-saga/effects";

import {
  setShowDetails,
  setLoading,
  setError,
} from "../../slices/showDetailsSlice";

import requestGetShowDetails from "./showDetailsRequest";

function* handleGetShowDetails({ payload }) {
  try {
    // show loading
    yield put(setLoading(true));

    // get show details
    const resShowDetails = yield call(requestGetShowDetails, payload.showId);
    yield put(setShowDetails({ showDetails: resShowDetails.data }));

    // hide loading
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(true));
  }
}
export default handleGetShowDetails;
