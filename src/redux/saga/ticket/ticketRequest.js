import axios from "axios";

const requestTicket = () => ({
  addTicket: (ticketInfo) =>
    axios.request({
      method: "POST",
      url: `${process.env.REACT_APP_API_PATH}ticket`,
      data: ticketInfo,
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }),
});

export default requestTicket;
