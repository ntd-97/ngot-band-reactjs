import axios from "axios";

const requestGetLoginInfo = () => ({
  login: (loginAccount) =>
    axios.request({
      method: "POST",
      url: `${process.env.REACT_APP_API_PATH}user/login`,
      data: {
        email: loginAccount.email,
        password: loginAccount.password,
      },
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }),
  userInfo: (userId) =>
    axios.request({
      method: "GET",
      url: `${process.env.REACT_APP_API_PATH}user/${userId}`,
    }),
});

export default requestGetLoginInfo;
