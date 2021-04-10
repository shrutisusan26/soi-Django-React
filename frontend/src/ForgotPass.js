import React,{useState} from 'react'
import APIService from "./APIService"
import {useHistory,Link} from 'react-router-dom'
function ForgotPass() {
    let history=useHistory();
    const [email,setEmail]=useState('');
    const handleSubmit=()=>{
          
        APIService.password_reset({email})
        .then(resp=> {
            console.log('mail sent')
        })
        history.push('/success');
    }
    
    return (
        <div>
            <div className="login" style={centerElem}>
                <br/>
                <br/>
                
                <div style={centerElem}>
                    <h2>Forgot Password</h2>
                </div>

                <div className="mb-3" style={centerElem}>
                    
                    <label htmlFor="username" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" value={email} placeholder="Enter the email you registered with" onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    <button className="btn btn-primary" onClick={()=>handleSubmit()}>Change Password</button>
                </div>
        </div>
        </div>
    )
}

export default ForgotPass
const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}