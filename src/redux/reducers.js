import { combineReducers } from "@reduxjs/toolkit";

import commonInfoReducer from "./slices/commonInfoSlice";

const reducer = combineReducers({
  commonInfo: commonInfoReducer,
});

export default reducer;
