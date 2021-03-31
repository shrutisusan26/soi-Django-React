import React from 'react';
import axios from 'axios';
import { Spin, Icon } from 'antd';
import { connect } from 'react-redux';
import Contact from './Contact';
import * as navActions from './actions/nav';
import * as messageActions from './actions/message';
import ls from 'local-storage';
//const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class Sidepanel extends React.Component {
   state={
        username : ls.get('username'),
        token:ls.get('token'),
        loginForm: true,
    }
    constructor(props){
        super(props);
        this.getUserChats(this.state.token,this.state.username);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.token !== null && newProps.username !== null) {
            this.getUserChats(newProps.token, newProps.username);
        }
    }
    componentDidMount() {
        if (this.props.token !== null && this.props.username !== null) {
            this.getUserChats(this.props.token, this.props.username);
        }
    }
    
    getUserChats = (token, username) => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        };

        axios.get(`http://127.0.0.1:8000/chat/?username=${username}`)
        .then(res => {
            console.log(res.data);
            this.setState({
                chats: res.data
            });
        });
    }

    render() {
        const activeChats = this.props.chats.map(c => {
            return (
                <Contact 
                    key={c.id}
                    name="Investor 1" 
                    picURL="http://emilcarlsson.se/assets/louislitt.png"
                    status="busy"
                    chatURL={`/${c.id}`} />
            )
        })
        return (
            <div id="sidepanel">
            <div id="profile">
                <div className="wrap">
                <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                <p>{this.state.username}</p>
                <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                <div id="status-options">
                    <ul>
                    <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                    <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                    <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                    <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                    </ul>
                </div>
            </div>
            <div id="search">
                <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
                <input type="text" placeholder="Search contacts..." />
            </div>
            <div id="contacts">
                <ul>
                    {activeChats}
                </ul>
            </div>
            <div id="bottom-bar">
                <button id="addcontact" onClick={()=> this.props.addChat()}>
                    <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> 
                    <span>  Create chat</span>
                </button>
                <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
            </div>
            </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        token: ls.get('token'),
        username: ls.get('username'),
        chats:state.messages.chats,
    }
}
const mapDispatchToProps = dispatch => {
    return {
      addChat: () => dispatch(navActions.openAddChatPopup()),
      getUserChats: (username, token) =>
        dispatch(messageActions.getUserChats(username, token)),dispatch,
    }
  };
export default connect(mapStateToProps,mapDispatchToProps)(Sidepanel);