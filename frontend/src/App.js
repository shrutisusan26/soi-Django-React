import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  './App.css';

const StartupDashboard = React.lazy(() => import('./Startup/StartupDashboard'));

const  BaseLayout  = () => (
    <div  className="container-fluid">
        <div  className="content">
            <Route  path="/startup/"  component={StartupDashboard}  />
        </div>
    </div>
)

class  App  extends  Component {

    render() {
        return (
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
        );
    }
}

export  default  App;