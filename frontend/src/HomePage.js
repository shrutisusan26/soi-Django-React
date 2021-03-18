import React from 'react'
import Navbar from './Navbar'
import './index.css'
function HomePage() {
    
    return (
        <div  >
            <header>
              
                    <div className="title">
                        <h1 className="mb-5">Seeking Online Investments!</h1>
                        <a href="/investorlogin" className="btn btn-outline btn-xl js-scroll-trigger">Investor</a>
                        <a href="/startuplogin" className="btn btn-outline btn-xl js-scroll-trigger">Startup</a>
                    </div>
            </header>
        </div>
    )
}
export default HomePage;

