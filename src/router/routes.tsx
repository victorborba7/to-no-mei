import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Mei from "@/pages/Mei";

export default function Router() {

    let element = useRoutes([
        { path: '/', element: <Login /> },
        { path: '/home', element: <Home /> },
        { path: '/mei', element: <Mei /> },
    ]);

    return element;
}