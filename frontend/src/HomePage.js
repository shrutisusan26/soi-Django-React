import React from 'react'
import './index.css'

// core components
import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import IndexHeader from "./components/Headers/IndexHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";

function HomePage() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("index-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });
    return (
    
        <div>
          
          <IndexNavbar />
          
         
       
        <div className="wrapper">
          <IndexHeader />
            <div className="main">
                <header>
                    {/* <div className="title" style={{margin:"auto"}}>
                        <h1 className="mb-5">Seeking Online Investments!</h1>
                        <a href="/investorlogin" className="btn btn-outline btn-xl js-scroll-trigger">Investor</a>
                        <a href="/startuplogin" className="btn btn-outline btn-xl js-scroll-trigger">Startup</a>
                    </div> */}
                </header>
                {/* <Carousel  style={{margin:"auto"}}/> */}
                {/* <NucleoIcons /> */}
                {/* <CompleteExamples /> */}
                
                {/* <Examples  style={{margin:"auto"}}/> */}
                {/* <Download /> */}
            </div>
            <DarkFooter />
            </div>
        </div>
    );
}
export default HomePage;

