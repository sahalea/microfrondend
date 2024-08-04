import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";

import { useSelector } from "react-redux";
import PrivateRoute from "shared/middleware/PrivateRoute";

const App = () => {
  const auth = useSelector((state) => state.auth);

  const secureRoute = (Element) =>
    PrivateRoute({
      element: Element,
      isAuth: auth.isAuthenticated,
    });

  console.log(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={secureRoute(HomePage)} />
      </Routes>
    </Router>
  );
};

export default App;
