import React from 'react';
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message'
 
const Message = () => (
  <FlashMessage duration={10000}>
    <strong style={{color:"red"}}>Incorrect Username or Password, please try again.</strong>
  </FlashMessage>
)
 
export default Message;