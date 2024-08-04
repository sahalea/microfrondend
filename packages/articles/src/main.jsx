import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";

import "shared/locales/i18n";
import store from "shared/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
