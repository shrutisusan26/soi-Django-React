import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter} from 'react-router-dom'
import LoginInv from './components/Investor/LoginInv'
import {CookiesProvider} from 'react-cookie';
import Home from './components/Home';
import LoginSu from './components/Startup/LoginSu';
function Router(){
  return(
  <CookiesProvider>
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/investorlogin" component={LoginInv}/>
      <Route exact path="/startuplogin" component={LoginSu}/>
    </BrowserRouter>
  </CookiesProvider>);
}
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
