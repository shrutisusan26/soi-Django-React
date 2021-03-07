import React,{useState,useEffect} from 'react'
import '../index.css'
import Navbar from './Navbar'
function Home() {
    return (
        <div>
            <Navbar/>
            <div className="choice">
            <a href="/investorlogin" className="btn btn-primary" >Investor</a>
            <a href="/startuplogin" className="btn btn-primary " >Startup</a>
            </div>
        </div>
    )
}

export default Home
