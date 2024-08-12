import React, { useState, useEffect } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { SetAuth, SetAuthNotFound } from "./store/Slices/AuthSlice";
import App from "./App.jsx";
import AddRecordForm from "./Components/Forms/AddRecordForm";
import Home from "./Pages/Home/Home";
import Records from "./Pages/Records/Records";
import AllRecords from "./Pages/Records/AllRecords";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import Login from "./Pages/Login/Login";
import UserPdf from "./UserPdf.jsx";
import PageLoader from "./Components/Loader/PageLoader.jsx";
import EditRecordForm from "./Components/Forms/EditRecordForm.jsx";

function ProtectedApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const isLoggedIn = localStorage.getItem("logged-in");
      if (isLoggedIn) {
        setIsLoggedIn(true);
        setLoading(false);
      }
      if (!isLoggedIn) {
        setIsLoggedIn(false);
        setLoading(false);
      }
    }, 1000); // execute the function after 4 seconds
  }, []);

  const VisitorRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/*", element: <Navigate to="/login" /> },
  ]);
  const AdminRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/records/edit",
      element: <EditRecordForm />,
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
    { path: "/*", element: <Navigate to="/" /> },
  ]);

  return Loading ? (
    <div className="h-screen w-screen flex justify-center items-center">
      <PageLoader />
    </div>
  ) : (
    <>
      <RouterProvider router={isLoggedIn ? AdminRouter : VisitorRouter} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default ProtectedApp;
