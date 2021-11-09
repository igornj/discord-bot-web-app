import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import Form from '../components/Form';
import HomePage from '../components/HomePage';
import Galeria from '../components/Galeria';
import Page404 from '../pages/Page404';

import PrivateRoute from './PrivateRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} auth />
        <PrivateRoute exact path="/upload" component={Form} />
        <PrivateRoute exact path="/galeria" component={Galeria} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
