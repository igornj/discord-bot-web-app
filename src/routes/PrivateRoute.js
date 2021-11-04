/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import verifyToken from '../middleware/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) => {
      return verifyToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      );
    }}
  />;
  /*   <Route
    {...rest}
    render={(props) =>
      verifyToken() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />; */
};

export default PrivateRoute;
