import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CheckAuth from "./components/check-auth";
import AuthLayout from "./layouts/AuthLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { loadUserFromStorage, logout } from "./store/slice/authSlice";

const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());

    // Optional: if token is missing, force logout
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <>
      <div
        id="toast-container"
        className="fixed top-5 right-5 z-50 space-y-2"
      ></div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Redirect / to /auth/login if not authenticated */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Navigate to="/auth/login" replace />
            ) : (
              <Navigate to="/shop/home" />
            )
          }
        />

        {/* Auth routes */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Protected routes like /shop/home etc. */}
        {/* <Route path="/shop/home" element={...} /> */}
      </Routes>
    </>
  );
};

export default App;
