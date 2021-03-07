import React,{useState,useEffect} from 'react'
import './index.css'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
function Home() {
    let history=useHistory()
    const InvestorLoginPage=()=>{
        history.push('/investorlogin')
    }
    const StartupLoginPage=()=>{
        history.push('/startuplogin')
    }
    
    return (
        <div>
            <Navbar/>
            <div className="choice">
            <button className="btn btn-primary" onClick={InvestorLoginPage}>Investor</button>
            <button className="btn btn-primary" onClick={StartupLoginPage}>Startup</button>
            </div>
        </div>
    )
}

export default Home
