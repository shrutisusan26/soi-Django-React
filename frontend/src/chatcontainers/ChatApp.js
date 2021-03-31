import React from 'react';
import Chat from './Chat';
import { BrowserRouter as Router } from 'react-router-dom';
import WebSocketInstance from './websocket'
import BaseRouter from './routes';
import Sidepanel from './Sidepanel';
import Profile from './Profile';
import { connect } from 'react-redux';
import '../assets/style.css'
import AddChatModal from './Popup'
import * as navActions from './actions/nav';
import * as messageActions from './actions/message';

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        WebSocketInstance.addCallbacks(
        this.props.setMessages.bind(this),this.props.addMessage.bind(this))

    }
    render() {
        return(
            <Router>
                <div id="frame">
                    <Sidepanel />
                    <div className="content">
                    {console.log(this.props.showAddChatPopup)}
                        <AddChatModal 
                        isVisible={this.props.showAddChatPopup}
                        close ={()=>this.props.closeAddChatPopup()}/>
                        <Profile />
                        <BaseRouter />
                    </div>
                </div>
            </Router>
        );
    };
}
const mapStateToProps = state => {
    return {
      showAddChatPopup: state.nav.showAddChatPopup,
      
    };
  };  
const mapDispatchToProps = dispatch => {
    return {
      closeAddChatPopup: () => dispatch(navActions.closeAddChatPopup()),
      addMessage: message => dispatch(messageActions.addMessage(message)),
      setMessages: messages => dispatch(messageActions.setMessages(messages)),
      dispatch,
      
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatApp);