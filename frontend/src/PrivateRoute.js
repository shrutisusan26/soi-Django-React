import React,{useState,useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoute({render: Component,type:type, ...rest }) {
  let types="false";
    if(type==="startup"){
      types="true"
    }
    return (
     <Route
      {...rest}
      render = {props => 
        localStorage.getItem('username')&& localStorage.getItem('token')? (
          localStorage.getItem('startup')===types? (
              <Component {...props} />
          ):(<Redirect to="/home" />)
        )
         : (
        <Redirect to="/home" />
      )
    }
  />
    )
}

export default PrivateRoute;
