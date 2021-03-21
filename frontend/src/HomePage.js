import React from 'react'
import Navbar from './Navbar'
import './index.css'

// core components
import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import IndexHeader from "./components/Headers/IndexHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";

// sections for this page

// import Carousel from "./index-sections/Carousel.js";
import Carousel from "./views/index-sections/Carousel.js";
// import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./views/index-sections/CompleteExamples.js";

import Examples from "./views/index-sections/Examples.js";
import Download from "./views/index-sections/Download.js";

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
        // <div  >
        //     <header>
              
        //             <div className="title">
        //                 <h1 className="mb-5">Seeking Online Investments!</h1>
        //                 <a href="/investorlogin" className="btn btn-outline btn-xl js-scroll-trigger">Investor</a>
        //                 <a href="/startuplogin" className="btn btn-outline btn-xl js-scroll-trigger">Startup</a>
        //             </div>
        //     </header>
        // </div>
        <div>
        <IndexNavbar />
        <div className="wrapper">
          <IndexHeader />
          <div className="main">
          <header>
              
              <div className="title">
                  <h1 className="mb-5">Seeking Online Investments!</h1>
                  <a href="/investorlogin" className="btn btn-outline btn-xl js-scroll-trigger">Investor</a>
                  <a href="/startuplogin" className="btn btn-outline btn-xl js-scroll-trigger">Startup</a>
              </div>
      </header>
            <Carousel />
            {/* <NucleoIcons /> */}
            <CompleteExamples />
            
            <Examples />
            <Download />
          </div>
          <DarkFooter />
        </div>
        </div>
    );
}
export default HomePage;

