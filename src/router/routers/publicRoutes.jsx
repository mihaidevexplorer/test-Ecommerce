//publicRoutes.js
import { lazy } from "react";
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

/* eslint-disable react-refresh/only-export-components */

const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
];

export default publicRoutes;

