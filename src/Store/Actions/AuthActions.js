import { authConstants } from "../Constants/AuthConstants";
import axios from "axios";
import { apiUrl } from "../../Helpers/config";
import { notification } from "antd"

const apiSuccessNew = (response) => notification['success']({ description: response?.message || 'Success!' });
const apiErrorNew = (err) => notification['error']({ description: err?.message || 'Something is wrong!' });

export const login = (payload, callback) => (dispatch) => {
  axios
    .post(`${apiUrl}login`, payload)
    .then((response) => {
      localStorage.setItem('token', 'Bearer '+response.data.data.token)
      localStorage.setItem('name', response.data.data.name)
      localStorage.setItem('username', response.data.data.username)
      callback();
      apiSuccessNew(response.data.data);
    })
    .catch((err) => {
      apiErrorNew(err.response.data)
    });
};
