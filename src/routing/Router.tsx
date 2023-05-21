import { Router } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { Route } from "./Route";
import { Slider } from "../components/Slider/Slider";

export const ROUTER = createBrowserRouter([
    {
        path: Route.HOME,
        element: <Slider step={0} children={[<p>1</p>, <p>2</p>]} />
    }
]);