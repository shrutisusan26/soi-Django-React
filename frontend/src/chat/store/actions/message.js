import axios from "axios";
import * as actionTypes from "./actionTypes";
export const addMessage = message => {
  return {
    type: actionTypes.ADD_MESSAGE,
    message: message
  };
};

export const setMessages = messages => {
  return {
    type: actionTypes.SET_MESSAGES,
    messages: messages
  };
};

const getUserChatsSuccess = chats => {
  return {
    type: actionTypes.GET_CHATS_SUCCESS,
    chats: chats
  };
};

export const getUserChats = (username, token) => {
  return dispatch => {
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    console.log(token.replace(/['"]+/g, ''));
    if(username){
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token.replace(/['"]+/g, '')}`
      };
      axios
        .get(`http://127.0.0.1:8000/chat/?username=${username.replace(/['"]+/g, '')}`)
        .then(res => dispatch(getUserChatsSuccess(res.data)));
    }
  }
};
