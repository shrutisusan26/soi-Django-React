import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { icons } from './assets/icons'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import "antd/dist/antd.css";
import navReducer from "./chat/store/reducers/nav";
import messageReducer from "./chat/store/reducers/message";
import authReducer from "./chat/store/reducers/auth"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const rootReducer = combineReducers({
    auth: authReducer,
    nav: navReducer,
    message: messageReducer
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  //   if (module.hot) {
  //     module.hot.accept("./store/reducers", () => {
  //       const nextRootReducer = require("./store/reducers/auth");
  //       store.replaceReducer(nextRootReducer);
  //     });
  //   }

  return store;
}

const stores = configureStore();
React.icons = icons

ReactDOM.render(
  <Provider store={stores}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
