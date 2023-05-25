import { Router } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { Route } from "./Route";
import { Slider } from "../components/Slider/Slider";
import { Register } from "../pages/Register/Register";
import { Home } from "../pages/Home/Home";

export const ROUTER = createBrowserRouter([
    {
        path: Route.HOME,
        element: <Home />
    },
    {
        path: Route.REGISTER,
        element: <Register />
    }
]);