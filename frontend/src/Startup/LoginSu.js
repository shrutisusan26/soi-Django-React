import React,{useEffect,useState} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom'
function LoginSu() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [startup_name,setstartup_name]=useState('')
    const [startup_description,setDescription]=useState('')
    const [email,setEmail]=useState('')
    const [isLogin,setIsLogin]=useState(true)
    const [token,setToken]=useCookies(['mytoken'])
    const [isError,setisError]=useState(false)
    let history=useHistory()
    useEffect(()=>{
        if(isError){
            setisError(false)
            history.push('/startupslogin')
        }
        else if(token['mytoken']){
            history.push('/Dashboard')
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
            <div className="login">
            {isLogin? <h1>Please Login </h1>: <h1>Please Register</h1>}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" value={username} placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
            </div><br/>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value) }/>
            </div><br/>
            {!isLogin?<div> <div className="mb-3">
                <label htmlFor="startup_name" className="form-label">Company Name</label>
                <input type="text" className="form-control" id="companyNum" value={startup_name} placeholder="Enter your firstName" onChange={(e)=>setstartup_name(e.target.value)}/>
            </div><br/>
            <div className="mb-3">
                <label htmlFor="startup_description" className="form-label">Company Description:</label>
                <input type="text" className="form-control" id="startup_description" placeholder="Enter the last name" value={startup_description} onChange={(e)=>setDescription(e.target.value) }/>
            </div><br/>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="text" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value) }/>
            </div> 
            <button className="btn btn-primary" onClick={RegisterButton}>Register</button></div>
            :<button className="btn btn-primary" onClick={loginButton}>Login</button> }
            {isLogin?
            <div className="mb-3">
            <br/>
            <h5> Dont Have An Account? Please <button className="btn btn-primary" onClick={()=>setIsLogin(false)}>Register</button>Here</h5></div>:
            <h5> If you have an account, Please <button className="btn btn-primary" onClick={()=>setIsLogin(true)}>Login</button>Here</h5>}
            </div>
        </div>
    )
}

export default LoginSu
