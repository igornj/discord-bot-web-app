/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import Uploader from '../components/Uploader';
import HomePage from '../components/HomePage';
import Galeria from '../components/Galeria';
import ForgotPassword from '../components/ForgotPassword';
import Page404 from '../pages/Page404';

import PrivateRoute from './PrivateRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/upload" component={Uploader} />
        <PrivateRoute exact path="/galeria" component={Page404} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/resetsenha" component={ForgotPassword} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
