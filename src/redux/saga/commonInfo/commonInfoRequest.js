import axios from "axios";

const requestGetCommonInfo = () => {
  return {
    commonInfo: () =>
      axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_PATH}commonInfo`,
      }),
    members: () =>
      axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_PATH}member`,
      }),
    albums: () =>
      axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_PATH}album`,
      }),
    shows: () =>
      axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_PATH}show`,
      }),
  };
};

export default requestGetCommonInfo;
