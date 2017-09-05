import './App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// redux setup ##########################################
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(reduxThunk));

import Home from "pages/Home";
import Navigation from "./components/Navigation";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import UserAdmin from "pages/UserAdmin";
import Upload from "pages/Upload";
import PageError from "pages/404";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="navbar">
            <Navigation/>
            <Switch>
              <Route exact path= "/" component={Home}/>
              <Route exact path="/Signup" component={SignUp}/>
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/UserAdmin" component={UserAdmin}/>
              <Route exact path="/Upload" component={Upload}/>
              <Route exact path="/*" component={PageError}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
      );
    }
}

export default App;