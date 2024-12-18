import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import TopicList from "./pages/TopicList";
import TopicDetails from "./pages/TopicDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />

<Route
          path="/topics"
          element={
            <ProtectedRoute>
              <TopicList />
            </ProtectedRoute>
          }
        />
         <Route
          path="/topics/:topicId" // Add dynamic route here
          element={
            <ProtectedRoute>
              <TopicDetails />
            </ProtectedRoute>
          }
        />


        
        {/* Add more protected routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
