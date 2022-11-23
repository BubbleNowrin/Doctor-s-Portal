import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Appointments from "../../Pages/Components/Appointments/Appointments/Appointments";
import Home from "../../Pages/Components/Home/Home";
import Login from "../../Pages/Components/Login/Login";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import Allusers from "../../Pages/DashBoard/AllUsers/Allusers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointments from "../../Pages/DashBoard/MyAppointments/MyAppointments";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-pied-ten.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])