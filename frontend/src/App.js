import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';

import ReactDOM from 'react-dom';

import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App(){
 

  

    const StartupDashboard= React.lazy(() => import('./Startup/StartupDashboard'));
    const LoginSu=React.lazy(()=> import('./Startup/LoginSu'));
    const LoginInv=React.lazy(()=>import('./Investor/LoginInv'));
    const Home=React.lazy(()=>import('./Home'));
    const DescriptionForm=React.lazy(()=>import('./Startup/DescriptionForm'));
    return (
      
      <CookiesProvider>
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/home" name="Home" render={props => <Home {...props}/>} />
              <Route path="/dashboard" name="Dashboard" render={props => <StartupDashboard {...props}/>} />
              <Route exact path="/startuplogin" name="Investor Login" render={props=> <LoginSu {...props}/>}/>
              <Route exact path="/investorlogin" name="Startup Login" render={props=> <LoginInv {...props}/>}/>
              <Route exact path="/updatedesc" name="Update Description" render={props=> <DescriptionForm {...props}/>}/>
            </Switch>
          </React.Suspense>
      </BrowserRouter>
      </CookiesProvider>
      
     
      
    );
  }
  export default App;
