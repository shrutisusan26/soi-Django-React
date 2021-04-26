import React from "react";
import { Spin, Icon } from "antd";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import * as navActions from "../store/actions/nav";
import * as messageActions from "../store/actions/message";
import Contact from "../components/Contact";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Sidepanel extends React.Component {
  state = {
    loginForm: true,
     };

  waitForAuthDetails() {
    const component = this;
    setTimeout(function() {
      if (
        component.props.token !== null &&
        component.props.token !== undefined
      ) {
        component.props.getUserChats(
          component.props.username,
          component.props.token
        );
        return;
      } else {
        component.waitForAuthDetails();
      }
    }, 100);
  }

  componentDidMount() {
    this.waitForAuthDetails();
  }

  openAddChatPopup() {
    this.props.addChat();
  }

  authenticate = e => {
    e.preventDefault();
    if (this.state.loginForm) {
      this.props.login(e.target.username.value, e.target.password.value);
    } 
  };
  redirect=e=>{
    e.preventDefault();
   
    if(localStorage.getItem('startup')=="true"){
      window.location.href = '/startup/dashboard';
     }
    else{
      window.location.href = '/investor/catalog';
    }
  }
  render() {
    let activeChats = this.props.chats.map(c => {
      return (
        <Contact
          key={c.id}
          name={c.participants.filter(person=>person!==this.props.username.replace(/['"]+/g, ''))}
          picURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR6DbwZj-pYWkxeRYJBGROrO6KAa69CTcfQ&usqp=CAU"
          status="busy"
          chatURL={`/${c.id}`}
        />
      );
    });
    return (
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <img
              id="profile-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR6DbwZj-pYWkxeRYJBGROrO6KAa69CTcfQ&usqp=CAU"
              className="online"
              alt=""
            />
            <p>{this.props.username}</p>
           
            
            <div id="expanded">
                <button onClick={(e)=>this.redirect(e)}>Back</button>
            </div>
          </div>
        </div>
       
        <div id="contacts">
          <ul>{activeChats}</ul>
        </div>
        <div id="bottom-bar">
          <button id="addChat" onClick={() => this.openAddChatPopup()}>
            <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
            <span>Create chat</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    loading: state.auth.loading,
    token: state.auth.token,
    username: state.auth.username,
    chats: state.message.chats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) =>
      dispatch(actions.authLogin(userName, password)),
    logout: () => dispatch(actions.logout()),
    addChat: () => dispatch(navActions.openAddChatPopup()),
    getUserChats: (username, token) =>
      dispatch(messageActions.getUserChats(username, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidepanel);
