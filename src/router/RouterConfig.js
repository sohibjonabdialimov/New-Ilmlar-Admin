import React from "react";
import AuthLayout from "../layout/AuthLayout";
import AdminLayout from "../layout/AdminLayout";


const HomePage = React.lazy(() => import("../views/home/HomePage"));

export const RoutesConfig = [{
    title: "home",
    path: "/",
    Layout: AdminLayout,
    roles: [],
    subOptions: [],
    Component: HomePage,
  },

];