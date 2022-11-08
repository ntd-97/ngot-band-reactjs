import axios from "axios";

const requestSignUpAccount = (userInfo) =>
  axios.request({
    method: "POST",
    url: `${process.env.REACT_APP_API_PATH}user`,
    data: userInfo,
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });

export default requestSignUpAccount;
