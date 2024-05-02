import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./utils/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/All.css";
import AppRouter from "./AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  </React.StrictMode>
);
