import React,{useState,useEffect} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom'
import ls from "local-storage"
import LoginFail from "../LoginFail"
function LoginInv() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [isLogin,setIsLogin]=useState(true)
    const [token,setToken]=useCookies(['mytoken'])
    const [isError,setisError]=useState(false)
    const [isAttempt,setisAttempt] = useState(false);
    let history=useHistory()
    useEffect(()=>{
        console.log("hi")
        if(isError){
            setisError(false)
            //history.push('/home')
        }
        else if(token['mytoken']){
            setisAttempt(true)
            history.push('/investor/dashboard')
        }
    },[token,isError])
    const RegisterButton=()=>{
        const user={username,password,email}
        APIService.RegisterInvestor({user,first_name,last_name})
        .then(resp=> {
            loginButton()
        })
        .catch(error=> console.log(error))
    }
    const loginButton=()=>{
        APIService.LoginInvestor({username,password})
        .then(resp=> {
        console.log(resp.token)
        if(resp.token){
            ls.set('username',resp['user_id']);
            console.log(resp)
            ls.set('token',resp.token);
            setToken('mytoken',resp.token)}
        
        else{ 
            setisError(true)
            setisAttempt(true)
        }
    })
    }
    return (
        <div>
            <div className="login" style={centerElem}>

                <div style={centerElem}>
                    <h2>Login for investors</h2>
                    {isLogin? <h2>Please Login </h2>: <h2>Please Register</h2>}
                </div>

                <div className="mb-3" style={centerElem}>
                    
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={username} placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    <br/>
                    
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value) }/>
                    
                </div>

                {!isLogin?
                <div> 
                    <div className="mb-3" style={centerElem}>
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="firstname" value={first_name} placeholder="Enter your firstName" onChange={(e)=>setFirstName(e.target.value)}/>
                        <br/>

                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter the last name" value={last_name} onChange={(e)=>setLastName(e.target.value) }/>
                        <br/>

                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value) }/>
                        <br/>
                        <button className="btn btn-primary" onClick={RegisterButton}>Register</button></div>
                    </div> 
                :
                    <div style={centerElem}>
                        <button className="btn btn-primary" onClick={loginButton}>Login</button> 
                    </div>
                }
                {isLogin?
                <div className="mb-3" style={centerElem}>
                    <h5> Don't Have An Account?</h5>
                    <button className="btn btn-primary" onClick={()=>setIsLogin(false)}>Register Here!</button>
                </div>:
                <div className="mb-3" style={centerElem}>
                    <h5> If you have an account,</h5>
                    <button className="btn btn-primary" onClick={()=>setIsLogin(true)}>Login</button>
                </div>
                }
                {isAttempt?
                    <div className="mb-3" style={centerElem}>
                        <LoginFail/>
                    </div>:
                    <br/>
                }
            </div>
        </div>
    )
}

export default LoginInv

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}
