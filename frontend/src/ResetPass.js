import React,{useState} from 'react'
import APIService from "./APIService"
import { useParams,useHistory } from "react-router-dom";
function ForgotPass() {
    let history=useHistory();
    const [new_password,setPass]=useState('');
    const [re_new_password,setConfPass]=useState('');
    const { uid,token } = useParams();
    // console.log(uid,token)
    const handleSubmit=()=>{
        
        APIService.password_confirm_reset({uid,token,new_password,re_new_password})
        .then(resp=> {
            console.log('successfully changed')
        })
        history.push('/home')
    }
    
    return (
        <div>
            <div className="login" style={centerElem}>
                <br/>
                <br/>
                <div style={centerElem}>
                    <h2>Reset Password</h2>
                </div>

                <div className="mb-3" style={centerElem}>
                    
                    <label htmlFor="username" className="form-label">New Password</label>
                    <input type="text" className="form-control" id="password" value={new_password} placeholder="Enter your password" onChange={(e)=>setPass(e.target.value)}/>
                    <br/>
                    <label htmlFor="username" className="form-label">Confirm New Password</label>
                    <input type="text" className="form-control" id="confirm-password" value={re_new_password} placeholder="Re-Enter your password" onChange={(e)=>setConfPass(e.target.value)}/>
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