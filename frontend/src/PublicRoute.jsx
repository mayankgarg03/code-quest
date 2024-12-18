import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("authToken"); // Check for token

  // If token exists, redirect to home page
  if (token) {
    return <Navigate to="/" replace />;
  }

  return children; // Render the public component
};

export default PublicRoute;
