import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Form from '../components/Form';
import Page404 from '../pages/Page404';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/login" component={Login} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
