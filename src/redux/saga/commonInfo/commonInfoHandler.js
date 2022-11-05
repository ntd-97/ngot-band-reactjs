import { call, put } from "redux-saga/effects";

import {
  setCommonInfo,
  setError,
  setLoading,
} from "../../slices/commonInfoSlice";

import requestGetCommonInfo from "./commonInfoRequest";

function* handleGetCommonInfo() {
  let data = {};

  const apiRequest = requestGetCommonInfo();

  try {
    // show loading
    yield put(setLoading(true));

    //get common info
    const resCommonInfo = yield call(apiRequest.commonInfo);
    data = { ...resCommonInfo.data[0] };

    //get members
    const resMembers = yield call(apiRequest.members);
    data.members = resMembers.data;

    //get albums
    const resAlbums = yield call(apiRequest.albums);
    data.albums = resAlbums.data;

    //get shows
    const resShows = yield call(apiRequest.shows);
    data.shows = resShows.data;

    // set common info
    yield put(setCommonInfo({ ...data }));

    // hide loading
    yield put(setLoading(false));
    yield put(setError(false));
  } catch (error) {
    console.log(error);
    yield put(setError(true));
  }
}

export default handleGetCommonInfo;
