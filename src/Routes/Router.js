import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import FoodDetails from "../Pages/Home/FoodDetails/FoodDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/food-details',
                element: <FoodDetails></FoodDetails>,

            },
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }

])