import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Main from "../main/Main";
import Imgpost from "../post/Imgpost";
import Toppost from "../post/Toppost";
import Login from '../share/Login'
import Sining from "../share/Sining";
import PrivateRouts from "./PrivateRouts";
import About from "../share/About"





const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sining',
                element: <Sining></Sining>
            },
            {
                path: '/imgpost',
                element : <PrivateRouts><Imgpost></Imgpost> </PrivateRouts>
            },
            {
            path:'/toppost',
            element: <PrivateRouts><Toppost></Toppost></PrivateRouts>
            },
            {
                path:'/about',
                element:<About></About>
            }            

        ]
    }


])

export default router;