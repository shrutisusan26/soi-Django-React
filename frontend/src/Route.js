import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
import HomePage from "../src/HomePage";
import history from './history';
import AboutUs from '../../frontend/src/AboutUs';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutUs} />
                    {/* <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}