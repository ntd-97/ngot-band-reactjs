import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUpInfo: {},
  openSignUpForm: false,
  loading: false,
  error: false,
  errorMsg: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    getSignUpInfo() {},
    setSignUpInfo: (state, action) => ({
      ...state,
      signUpInfo: action.payload,
    }),
    setOpenSignUpForm: (state, action) => ({
      ...state,
      openSignUpForm: action.payload,
    }),
    setError: (state, action) => ({ ...state, error: action.payload }),
    setLoading: (state, action) => ({ ...state, loading: action.payload }),
    setErrorMsg: (state, action) => ({ ...state, errorMsg: action.payload }),
  },
});

export const {
  setOpenSignUpForm,
  setSignUpInfo,
  getSignUpInfo,
  setError,
  setLoading,
  setErrorMsg,
} = signUpSlice.actions;
export default signUpSlice.reducer;
