import React from 'react';
import WebSocketInstance from './websocket';
import ls from 'local-storage'
import Hoc from '../hoc/hoc';
import { connect } from 'react-redux';
class Chat extends React.Component {
    state = {message:''}
    initialiseChat(){
        this.waitForSocketConnection(() => {
           // WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this))
            WebSocketInstance.fetchMessages(this.props.username,this.props.match.params.chatID);
          });
          WebSocketInstance.connect(this.props.match.params.chatID)
    }
    constructor(props) {
        super(props);
        this.initialiseChat();

    }
   
    waitForSocketConnection(callback) {
        const component = this;
        setTimeout(
            function () {
            if (WebSocketInstance.state() === 1) {
                console.log("Connection is made");
                callback();
                return;
            } else {
                console.log("wait for connection...");
                component.waitForSocketConnection(callback);
            }
        }, 100);
    }
    
    // addMessage(message) {
    //     this.setState({ messages: [...this.state.messages, message]});
    // }
    
    // setMessages(messages) {
    //     this.setState({ messages: messages.reverse()});
    // }
    
    messageChangeHandler = (event) =>  {
        this.setState({
            message: event.target.value
        })
    }
    
    sendMessageHandler = (e) => {
        e.preventDefault();
        const messageObject = {
            from: this.props.username,
            content: this.state.message,
            chatId:this.props.match.params.chatID
        };
        WebSocketInstance.newChatMessage(messageObject);
        this.setState({
            message: ''
        });
    }
    renderTimestamp = timestamp => {
        let prefix = ''; 
        const timeDiff = Math.round((new Date().getTime() - new Date(timestamp).getTime())/60000);
        if (timeDiff < 1) { // less than one minute ago
            prefix = 'just now...';
        } else if (timeDiff < 60 && timeDiff > 1) { // less than sixty minutes ago
            prefix = `${timeDiff} minutes ago`;
        } else if (timeDiff < 24*60 && timeDiff > 60) { // less than 24 hours ago
            prefix = `${Math.round(timeDiff/60)} hours ago`;
        } else if (timeDiff < 31*24*60 && timeDiff > 24*60) { // less than 7 days ago
            prefix = `${Math.round(timeDiff/(60*24))} days ago`;
        } else {
            prefix = `${new Date(timestamp)}`;
        }
        return prefix
    }
    renderMessages = (messages) => {
        const currentUser = this.props.username;
        return messages.map((message, i,arr) => (
            <li 
                key={message.id} 
                tyle={{marginBottom: arr.length - 1 === i ? '300px' : '15px'}}
                className={message.author === currentUser ? 'sent' : 'replies'}>
                <img src="http://emilcarlsson.se/assets/mikeross.png" />
                <p>{message.content}
                    <br />
                    <small className={message.author === currentUser ? 'sent' : 'replies'}>
                    {this.renderTimestamp(message.timestamp)}</small>
                </p>
            </li>
        ));
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
     componentWillReceiveProps(newProps){
        if(this.props.match.params.chatID !==newProps.match.params.chatID){
                WebSocketInstance.disconnect();
                this.waitForSocketConnection(() => {
                    // console.log(newProps.match.params.chatID);
                    WebSocketInstance.fetchMessages(
                    this.props.username,
                    newProps.match.params.chatID);
                });
                WebSocketInstance.connect(this.props.match.params.chatID)
        }
    }
    render() {
        const messages = this.state.messages;
        return (
            <Hoc>
                <div className="messages">
                    <ul id="chat-log">
                    { 
                        this.props.messages && 
                        this.renderMessages(this.props.messages) 
                    }
                     <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                    </ul>
                </div>
                <div className="message-input">
                    <form onSubmit={this.sendMessageHandler}>
                        <div className="wrap">
                            <input 
                                onChange={this.messageChangeHandler}
                                value={this.state.message}
                                required 
                                id="chat-message-input" 
                                type="text" 
                                placeholder="Write your message..." />
                            <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                            <button id="chat-message-submit" className="submit">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </Hoc>
        );
    };
}
 
const mapStateToProps = state => {
    return {
        username: ls.get('username'),
        messages:state.message.messages
    }
} 
export default  connect(mapStateToProps)(Chat);