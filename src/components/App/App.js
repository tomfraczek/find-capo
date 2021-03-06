import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session/Context';
import { withAuthentication } from '../Session';

import Navigation from '../Navigation/Navigation';
import Homepage from "../Homepage/Homepage";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import AccountPage from "../AccountPage/AccountPage";
import Admin from "../Admin/Admin";


const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Switch>
                <Route path='/' exact component={Homepage}/>
                <Route path='/signIn/' component={SignIn}/>
                <Route path='/signUp/' component={SignUp}/>
                <Route path='/account/' component={AccountPage}/>
                <Route path='/admin/' component={Admin}/>
            </Switch>
        </div>
    </Router>
);

export default withAuthentication(App);
