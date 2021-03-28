import React from 'react';
import Chat from './Chat';
import WebSocketInstance from './websocket'

class ChatApp extends React.Component {

    componentDidMount() {
        WebSocketInstance.connect();
    }
    render() {
        return(
            <Chat />
        );
    };
}
  
export default ChatApp;