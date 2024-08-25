import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Main from "../Layout/Main";
import Post from "../pages/Post/Post";
import Tolet from "../pages/Tolet/Tolet";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import PrivateRoutes from "./PrivateRoutes";
import Mypost from "../pages/Mypost/Mypost";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/post',
                element: <PrivateRoutes><Post></Post></PrivateRoutes>
            },
            {
                path: '/tolet',
                element:<PrivateRoutes> <Tolet></Tolet></PrivateRoutes>

            },
            {
                path: '/about',
                element: <About></About>

            },
            {
                path: '/mypost',
                element: <Mypost></Mypost>

            },
       
        

        ]
    }

])