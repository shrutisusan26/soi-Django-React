import React,{useEffect,useState} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom'
import StartupDashboard from './StartupDashboard';
import ls from "local-storage"
function LoginSu() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [startup_name,setstartup_name]=useState('')
    const [startup_description,setDescription]=useState('')
    const [email,setEmail]=useState('')
    const [isLogin,setIsLogin]=useState(true)
    const [token,setToken]=useCookies(['mytoken'])
    const [isError,setisError]=useState(false)
    const [response,setisResponse]=useState('');
    let history=useHistory()
    useEffect(()=>{
        if(isError){
            setisError(false)
            history.push('/startupslogin')
        }
        else if(token['mytoken']){
            history.push({
                pathname: '/startup/dashboard',
                state: { user_id: response }
            })
            
        }
    },[token,isError])
    const RegisterButton=()=>{
        const user={username,password,email}
        APIService.RegisterStartUp({user,startup_name,startup_description})
        .then(resp=> {
            loginButton()
        })
        .catch(error=> console.log(error))
    }
    const loginButton=()=>{
        APIService.LoginStartup({username,password})
        .then(resp=> {
            setisResponse(resp);
            ls.set('username',resp['user_id']);
            console.log(resp);
            if(resp.token){
                setToken('mytoken',resp.token)
            }
            
            else{ 
                setisError(true)
            }
    })
    }
    return (
        <div>
            <div className="login" style={centerElem}>
                {isLogin? <h1 style={centerElem}>Please Login </h1>: <h1 style={centerElem}>Please Register</h1>}
                <div className="mb-3" style={centerElem}>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text"  className="form-control" id="username" value={username} placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    <br/>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value) }/>
                </div>
                
                {!isLogin?
                <div>     
                    <div className="mb-3" style={centerElem}>
                        <label htmlFor="startup_name" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="companyNum" value={startup_name} placeholder="Enter your firstName" onChange={(e)=>setstartup_name(e.target.value)}/>
                        <br/>
                        <label htmlFor="startup_description" className="form-label">Company Description:</label>
                        <input type="text" className="form-control" id="startup_description" placeholder="Enter the last name" value={startup_description} onChange={(e)=>setDescription(e.target.value) }/>
                        <br/>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value) }/>
                        <br/>
                        <button className="btn btn-primary" onClick={RegisterButton}>Register</button>
                    </div>             
                </div>
                :
                <div style={centerElem}>
                    <button style={{margin:"auto"}} className="btn btn-primary" onClick={loginButton}>Login</button> 
                </div>
                }
                {isLogin?
                <div className="mb-3" style={centerElem}>
                    <br/>
                    <h5>Don't Have An Account?</h5>
                    <button className="btn btn-primary" onClick={()=>setIsLogin(false)}>Register Here!</button>
                </div>:
                <div className="mb-3" style={centerElem}>
                    <h5>If you have an account,</h5>
                    <button className="btn btn-primary" onClick={()=>setIsLogin(true)}>Login</button>
                </div>
                }
            </div>
        </div>
    )
}

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}

export default LoginSu
