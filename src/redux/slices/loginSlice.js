import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginInfo: {},
  openLoginForm: false,
  loading: false,
  errorMsg: "",
  error: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginInfo() {},
    setLoginInfo: (state, action) => ({
      ...state,
      loginInfo: action.payload,
    }),
    setOpenLoginForm: (state, action) => ({
      ...state,
      openLoginForm: action.payload,
    }),
    setError: (state, action) => ({ ...state, error: action.payload }),
    setLoading: (state, action) => ({ ...state, loading: action.payload }),
    setErrorMsg: (state, action) => ({ ...state, errorMsg: action.payload }),
  },
});

export const {
  setOpenLoginForm,
  setLoginInfo,
  getLoginInfo,
  setError,
  setLoading,
  setErrorMsg,
} = loginSlice.actions;
export default loginSlice.reducer;
