import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import PrivateRoute from './PrivateRoute';
import ReactDOM from 'react-dom';
import NewsPage from './News/NewsPage'
import './scss/style.scss';
import SubmitProfile from './Startup/SubmitProfile';
import InvestorDashboard from './Investor/InvestorDashboard';
import Browsing from './Investor/Browsing';
import ProfilePage from './views/examples/ProfilePage';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App(){
      const [isAuthenticated,setAuth]=useState(false);
      useEffect(() => {
        return () => {
          console.log(localStorage.getItem('username'));
          console.log(localStorage.getItem('token'));
          if(localStorage.getItem('username') && localStorage.getItem('token')){
            console.log("inside");    
            setAuth(true);
          }
        }
      }, [])
    const StartupDashboard= React.lazy(() => import('./Startup/StartupDashboard'));
    const LoginSu=React.lazy(()=> import('./Startup/LoginSu'));
    const LoginInv=React.lazy(()=>import('./Investor/LoginInv'));
    const InvestorDashboard=React.lazy(()=>import('./Investor/InvestorDashboard'));
    const Browsing=React.lazy(()=>import('./Investor/Browsing'));
    const HomePage=React.lazy(()=>import('./HomePage'));
    const ChatApp=React.lazy(()=>import('../src/chat/ChatApp'));
    const DescriptionForm=React.lazy(()=>import('./Startup/DescriptionForm'));
    const NewsPage=React.lazy(()=>import('./News/NewsPage'));
    const SubmitProfile=React.lazy(()=>import('./Startup/SubmitProfile'));
    const Logout=React.lazy(()=>'./Startup/Logout');
    const AboutUs=React.lazy(()=>import('./AboutUs'));
    const ProfilePage = React.lazy(()=>import('./views/examples/ProfilePage'));
    const ContactForm = React.lazy(()=>import('./Investor/contactForm'));
    const ContactUs = React.lazy(()=>import('./Startup/ContactUs'));
    const ForgotPass=React.lazy(()=>import('./ForgotPass'));
    const ResetPass=React.lazy(()=>import('./ResetPass'));
    const Mailsuccess=React.lazy(()=>import('./mailsuccess'));
    return (
      
      <CookiesProvider>
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            
              <Route  path="/home" name="Home" render={props => <HomePage {...props}/>} />
              <PrivateRoute  path="/investor/dashboard" name="Investor Dashboard" render={props => <InvestorDashboard {...props} />} />
              <PrivateRoute exact path="/startup/dashboard" name="Dashboard" render={props => <StartupDashboard {...props}/>} />
              <Route exact path="/startuplogin" name="Investor Login" render={props=> <LoginSu {...props}/>}/>
              <Route exact path="/investorlogin" name="Startup Login" render={props=> <LoginInv {...props}/>}/>
              <PrivateRoute  path="/startup/updatedesc" name="Update Description" render={props=> <DescriptionForm {...props}/>}/>
              <PrivateRoute exact path="/News" name="Market News" render={props=> <NewsPage {...props}/>}/>
              <PrivateRoute  path="/startup/profile" name="Profile Registration" render={props=> <SubmitProfile {...props}/>}/>
              <PrivateRoute path="/investor/catalog" name="Catalog" render={props => <Browsing {...props}/>}/>
              <PrivateRoute  path="/startup/logout" name="Logout" onClick={Logout}/>
              <Route path = "/about" name = "AboutUs" render = {props => <AboutUs {...props} />} />
              <PrivateRoute path="/chat" name="chat" render={props=> <ChatApp {...props}/>}/>
              <PrivateRoute path = "/profile" name = "ProfilePage" render = {props => <ProfilePage {...props} />} />
              <PrivateRoute path = "/contactform" name = "InvestorContactPage" render = {props => <ContactForm {...props} />} />
              <PrivateRoute path = "/contactus" name = "StartupContactPage" render = {props => <ContactUs {...props} />} />
              <Route exact path="/forgotpass" name="Forgot Password" render={props=><ForgotPass {...props} />}/>
              <Route path="/reset-password/confirm/:uid/:token/" name="Reset Password" render={props=><ResetPass {...props} />}/>
              <Route path="/success" name="Mail Success" render={props=><Mailsuccess {...props} />}/>
            </Switch>
          </React.Suspense>
      </BrowserRouter>
      </CookiesProvider>
      
     
      
    );
  }
  export default App;