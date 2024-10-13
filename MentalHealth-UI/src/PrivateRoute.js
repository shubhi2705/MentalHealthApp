// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Authcontext'; // Ensure this path is correct

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();
  
  // Return a Route component
  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
