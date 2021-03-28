import React from 'react';
import { connect } from 'react-redux';
import Hoc from '../hoc/hoc';
import ls from 'local-storage'
class Profile extends React.Component {
   
    render() {
        const username=ls.get('username');
        return (
            
            <div className="contact-profile">
            {
                username !== null ?

                <Hoc>
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <p>{username}</p>
                    <div className="social-media">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </Hoc>
                
                :

                null
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}
    
export default connect(mapStateToProps)(Profile);