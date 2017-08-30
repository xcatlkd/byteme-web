import './App.scss';
import React from 'react';
import Navigation from "./components/Navigation";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "pages/Home";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import UserAdmin from "pages/UserAdmin";
import PageError from "pages/404";


class App extends React.Component {
	render() {
		return (
    	<BrowserRouter>
      	<div className="navbar">
        	<Switch>
          	<Route exact path= "/" component={Home}/>
          	<Route exact path="/signup" component={SignUp}/>
          	<Route exact path="/login" component={Login}/>
          	<Route exact path="/UserAdmin" component={UserAdmin}/>
						<Route exact path="/*" component={PageError}/>
        	</Switch>
        	</div>
      	</BrowserRouter>
    	);
  	}
}

export default App;
