import React,{useState,useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoute({render: Component, ...rest }) {
  
    return (
     <Route
      {...rest}
      render = {props => 
        localStorage.getItem('username')&& localStorage.getItem('token')? (
          <Component {...props} />
        )
         : (
        <Redirect to="/home" />
      )
    }
  />
    )
}

export default PrivateRoute;
