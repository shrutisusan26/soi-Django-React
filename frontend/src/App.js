import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';

import ReactDOM from 'react-dom';
import NewsPage from './News/NewsPage'
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
    const NewsPage=React.lazy(()=>import('./News/NewsPage'));
    return (
      
      <CookiesProvider>
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/home" name="Home" render={props => <Home {...props}/>} />
              <Route path="/startup/dashboard" name="Dashboard" render={props => <StartupDashboard {...props}/>} />
              <Route exact path="/startuplogin" name="Investor Login" render={props=> <LoginSu {...props}/>}/>
              <Route exact path="/investorlogin" name="Startup Login" render={props=> <LoginInv {...props}/>}/>
              <Route exact path="/startup/updatedesc" name="Update Description" render={props=> <DescriptionForm {...props}/>}/>
              <Route exact path="/News" name="Market News" render={props=> <NewsPage {...props}/>}/>
            </Switch>
          </React.Suspense>
      </BrowserRouter>
      </CookiesProvider>
      
     
      
    );
  }
  export default App;
