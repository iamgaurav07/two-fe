import { userConstants } from "../Constants/UserConstants";
import axios from "axios";
import { apiUrl } from "../../Helpers/config";
import { notification } from "antd";
import { history } from "../../Helpers/history";

const apiSuccessNew = (response) => notification['success']({ description: response?.message || 'Success!' });
const apiErrorNew = (err) => notification['error']({ description: err?.message || 'Something is wrong!' });

const headersAuth = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
};

export const getUser = (limit, page, callback= () => {}) => (dispatch) => {
  axios
    .get(`${apiUrl}?limit=${limit}&&page=${page}`, headersAuth())
    .then((response) => {
        callback()
        dispatch({ type: userConstants.USERS, data: response.data.data })
        apiSuccessNew(response.data.data);
    })
    .catch((err) => {
      callback()
      if (err.response.status === 401) {
        history.push('/');
        history.go()
      }
      apiErrorNew(err.response.data)
    });
};
