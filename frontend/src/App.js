import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';

import ReactDOM from 'react-dom';
import NewsPage from './News/NewsPage'
import './scss/style.scss';
import SubmitProfile from './Startup/SubmitProfile';
import InvestorDashboard from './Investor/InvestorDashboard';
import Browsing from './Investor/Browsing';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App(){
    const StartupDashboard= React.lazy(() => import('./Startup/StartupDashboard'));
    const LoginSu=React.lazy(()=> import('./Startup/LoginSu'));
    const LoginInv=React.lazy(()=>import('./Investor/LoginInv'));
    const InvestorDashboard=React.lazy(()=>import('./Investor/InvestorDashboard'));
    const Browsing=React.lazy(()=>import('./Investor/Browsing'));
    const HomePage=React.lazy(()=>import('./HomePage'));

    const DescriptionForm=React.lazy(()=>import('./Startup/DescriptionForm'));
    const NewsPage=React.lazy(()=>import('./News/NewsPage'));
    const SubmitProfile=React.lazy(()=>import('./Startup/SubmitProfile'));
    const Logout=React.lazy(()=>'./Startup/Logout');
    const AboutUs=React.lazy(()=>import('./AboutUs'));
    return (
      
      <CookiesProvider>
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            
              <Route  path="/home" name="Home" render={props => <HomePage {...props}/>} />
              <Route  path="/investor/dashboard" name="Investor Dashboard" render={props => <InvestorDashboard {...props}/>} />
              <Route exact path="/startup/dashboard" name="Dashboard" render={props => <StartupDashboard {...props}/>} />
              <Route exact path="/startuplogin" name="Investor Login" render={props=> <LoginSu {...props}/>}/>
              <Route exact path="/investorlogin" name="Startup Login" render={props=> <LoginInv {...props}/>}/>
              <Route  path="/startup/updatedesc" name="Update Description" render={props=> <DescriptionForm {...props}/>}/>
              <Route exact path="/News" name="Market News" render={props=> <NewsPage {...props}/>}/>
              <Route  path="/startup/profile" name="Profile Registration" render={props=> <SubmitProfile {...props}/>}/>
              <Route path="/investor/catalog" name="Catalog" render={props => <Browsing {...props}/>}/>
              <Route  path="/startup/logout" name="Logout" onClick={Logout}/>
              <Route path = "/about" name = "AboutUs" render = {props => <AboutUs {...props} />} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
      </CookiesProvider>
      
     
      
    );
  }
  export default App;
