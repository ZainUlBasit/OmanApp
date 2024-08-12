import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./i18next.js";
import ProtectedApp from "./ProtectedApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProtectedApp />
    </Provider>
  </React.StrictMode>
);
