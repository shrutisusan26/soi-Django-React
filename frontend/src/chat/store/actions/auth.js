import axios from "axios";
import * as actionTypes from "./actionTypes";
import { HOST_URL } from "../../settings";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (username, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    username: username
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  
  window.location.href = '/home';
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("is_startup");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(`http://127.0.0.1:8000/api-token-auth/`, {
        username: username.replace(/['"]+/g, ''),
        password: password.replace(/['"]+/g, '')
      })
      .then(res => {
        const token = res.data.key;
        console.log(token);
        localStorage.setItem("token", token.replace(/['"]+/g, ''))
        localStorage.setItem("username", username.replace(/['"]+/g, ''));
        dispatch(authSuccess(username, token));
      
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};


export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token === undefined) {
      dispatch(logout());
    } else {
     
        dispatch(authSuccess(username, token));
    
      }
    }
  };
