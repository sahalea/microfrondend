import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Private route for entire application
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ element: Element, isAuth }) => {
  if (isAuth) return <Element />;
  else return <Navigate to="/" replace />;
};

export default PrivateRoute;
