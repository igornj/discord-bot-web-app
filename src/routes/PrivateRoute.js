/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import verifyToken from '../middleware/authMiddleware';
import { useAuth } from '../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        );
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: propTypes.any.isRequired,
};

export default PrivateRoute;
