import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

export default function Router() {

    let element = useRoutes([
        { path: '/', element: <Login /> },
        { path: '/home', element: <Home /> },
    ]);

    return element;
}