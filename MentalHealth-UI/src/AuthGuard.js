// AuthGuard.js
import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("phoneNumber") !== null;

  if (!isAuthenticated) {
    // If not authenticated, redirect to sign-in page
    return <Navigate to="/signin" />;
  }

  // If authenticated, render the children (protected content)
  return children;
};

export default AuthGuard;
