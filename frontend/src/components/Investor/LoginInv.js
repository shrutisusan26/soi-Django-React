import React,{useState,useEffect} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom'

function LoginInv() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [isLogin,setIsLogin]=useState(true)
    const [token,setToken]=useCookies(['mytoken'])
    const [isError,setisError]=useState(false)
    let history=useHistory()
    useEffect(()=>{
        if(isError){
            setisError(false)
            history.push('/investorlogin')
        }
        else if(token['mytoken']){
            history.push('/')
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
        if(resp.token){
            setToken('mytoken',resp.token)}
        
        else{ 
            setisError(true)
        }
    })
    }
    return (
        <div>
            <h1>Login for investors</h1>
            <div className="login">{isLogin? <h1>Please Login </h1>: <h1>Please Register</h1>}

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" value={username} placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
            </div><br/>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value) }/>
            </div><br/>
            {!isLogin?<div> <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input type="text" className="form-control" id="firstname" value={first_name} placeholder="Enter your firstName" onChange={(e)=>setFirstName(e.target.value)}/>
             </div><br/>
             <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input type="text" className="form-control" id="lastname" placeholder="Enter the last name" value={last_name} onChange={(e)=>setLastName(e.target.value) }/>
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

export default LoginInv
