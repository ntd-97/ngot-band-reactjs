import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerImgUrl: [],
  description: "",
  location: "",
  email: "",
  phone: "",
  members: [],
  albums: [],
  loading: false,
  error: false,
  openMenuSideBar: false,
};

const commonInfoSlice = createSlice({
  name: "commonInfo",
  initialState,
  reducers: {
    getCommonInfo() {},
    setCommonInfo: (state, action) => ({
      ...state,
      bannerImgUrl: action.payload.bannerImgUrl,
      description: action.payload.description,
      email: action.payload.email,
      location: action.payload.location,
      phone: action.payload.phone,
      members: action.payload.members,
      albums: action.payload.albums,
      shows: action.payload.shows,
    }),
    setOpenMenuSideBar: (state, action) => ({
      ...state,
      openMenuSideBar: action.payload,
    }),
    setError: (state, action) => ({ ...state, error: action.payload }),
    setLoading: (state, action) => ({ ...state, loading: action.payload }),
  },
});
export const {
  getCommonInfo,
  setCommonInfo,
  setError,
  setLoading,
  setOpenMenuSideBar,
} = commonInfoSlice.actions;
export default commonInfoSlice.reducer;
