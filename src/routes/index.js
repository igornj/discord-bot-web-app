import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../components/Login';
import Form from '../components/Form';
import HomePage from '../components/HomePage';
import Galeria from '../components/Galeria';
import Page404 from '../pages/Page404';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/upload" component={Form} />
        <Route exact path="/galeria" component={Galeria} />
        <Route exact path="/login" component={Login} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
