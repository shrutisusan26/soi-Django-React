import emailjs from "emailjs-com";
import React, { useState } from 'react';
import ls from 'local-storage';
import Feedback from "react-bootstrap/esm/Feedback";
import {
    TheSidebar,
    TheHeader,
  } from  '../containers/index'
export default function ContactForm() {
    const [feedback,setFeedback]=useState(true);

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_0g5hq1r', 'soi_template', e.target, 'user_ZrJ6uqAH0qlh1UfUvJ2PU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">
            <TheHeader/>
            <h1 style={centerElem}>Enquiry/Feedback</h1>
            <div className="c-body">
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            Username:
                            <input type="text" className="form-control" placeholder="Name" name="name" value={ls.get('username')}/>
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            Subject:
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        
                        {feedback?
                        <div className="col-8 form-group pt-2 mx-auto">
                            Feedback:
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your feedback" name="message"></textarea>
                            <button className="btn btn-primary" onClick={()=>setFeedback(false)}>Send An Enquiry?</button><input type="submit" className="btn btn-primary" value="Send Message"></input>
                            </div>  : <div className="col-8 form-group pt-2 mx-auto">
                            Message:
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            <button className="btn btn-primary" onClick={()=>setFeedback(true)}>Have a feedback?</button><input type="submit" className="btn btn-primary" value="Send Message"></input>
                        </div>}

                    </div>
                </form>
            </div>
            </div>
            </div>
           
        </div>
        </div>
    )
}
const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}