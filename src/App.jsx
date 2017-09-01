import './App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Navigation from "./components/Navigation";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import UserAdmin from "pages/UserAdmin";
import PageError from "pages/404";


class App extends React.Component {
	render() {
		return (
    	<BrowserRouter>
      	<div className="navbar">
					<Navigation/>
        	<Switch>
          	<Route exact path= "/" component={Home}/>
          	<Route exact path="/Signup" component={SignUp}/>
          	<Route exact path="/Login" component={Login}/>
          	<Route exact path="/UserAdmin" component={UserAdmin}/>
						<Route exact path="/*" component={PageError}/>
        	</Switch>
        </div>
      	</BrowserRouter>
    	);
  	}
}

export default App;
