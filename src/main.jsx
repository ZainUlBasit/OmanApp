import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home/Home";
import AddRecordForm from "./Components/Forms/AddRecordForm";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Records from "./Pages/Records/Records";
import AllRecords from "./Pages/Records/AllRecords";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import Login from "./Pages/Login/Login";
import "./i18next.js";
import UserPdf from "./UserPdf.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/record/:id",
    element: <App />,
  },
  {
    path: "/user-record/:id",
    element: <UserPdf />,
  },
  {
    path: "/records/add",
    element: <AddRecordForm />,
  },
  {
    path: "/records",
    element: <Records />,
  },
  {
    path: "/all-records",
    element: <AllRecords />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
