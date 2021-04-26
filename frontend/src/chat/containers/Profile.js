import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Hoc from "../hoc/hoc";

class Profile extends React.Component {
  render() {
    if (this.props.token === null) {
      return <Redirect to="/" />;
    }
    return (
      <div className="contact-profile">
        {this.props.props!== null ? (
          <Hoc>
            <img src="https://www.freeiconspng.com/thumbs/live-chat-icon/live-chat-icon-18.png" alt="" />
            <p>{this.props.props}</p>
          </Hoc>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Profile);
