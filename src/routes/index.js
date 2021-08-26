import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../components/Main';
import Page404 from '../pages/Page404';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
