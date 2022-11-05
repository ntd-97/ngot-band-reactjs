import axios from "axios";

const requestGetShowDetails = (showId) =>
  axios.request({
    method: "GET",
    url: `${process.env.REACT_APP_API_PATH}show/${showId}`,
  });

export default requestGetShowDetails;
