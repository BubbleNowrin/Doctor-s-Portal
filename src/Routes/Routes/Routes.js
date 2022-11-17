import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Appointments from "../../Pages/Components/Appointments/Appointments/Appointments";
import Home from "../../Pages/Components/Home/Home";
import Login from "../../Pages/Components/Login/Login";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointments',
                element: <Appointments></Appointments>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    }
])