import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home/Home";
import AddRecordForm from "./Components/Forms/AddRecordForm";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Records from "./Pages/Records/Records";
import AllRecords from "./Pages/Records/AllRecords";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/record/:id",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
